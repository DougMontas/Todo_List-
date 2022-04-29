import React, { useState, useEffect } from "react";
import { getTodos, createTodos, updateTodos, deleteTodos } from "./API";

//create your first component
const TodoList = () => {
	const [tasks, setTasks] = useState(""); //Input

	const [list, setList] = useState([""]); //List

	//GET
	useEffect(() => {
		const fn = async () => {
			const apiTasks = await getTodos();
			setList(apiTasks.map((x) => x.label));
		};

		fn();
		console.log(list);
	}, []);

	//POST
	useEffect(() => {
		const fn = async () => {
			await updateTodos(list.map((x) => ({ label: x, done: false })));
		};
		fn();
	}, [list]);

	const createNewTodo = (event) => {
		if (event.key === "Enter" && tasks.trim().length > 0) {
			let newList = [...list, tasks];

			setList(newList);
			setTasks("");
		}
	};

	return (
		<div className="title">
			todos
			<div className="list">
				<div>
					<input
						onKeyDown={(event) => createNewTodo(event)}
						value={tasks}
						placeholder="add your task"
						onChange={(ev) => setTasks(ev.currentTarget.value)}
					/>
					<div className="items">
						<div className="ul">
							<ul>
								{list.map((item, index) => {
									return (
										<li key={index}>
											{item}

											<button
												onClick={() => {
													const _newList =
														list.filter(
															(item, j) =>
																index !== j
														);

													setList(_newList);
												}}>
												{" "}
												X
												{/* <i className="fa-solid fa-trash-can"></i> */}
											</button>
											{/* <button>?</button> */}
										</li>
									);
								})}
							</ul>
						</div>
					</div>
				</div>
				<div className="item_left">{list.length} items left</div>
			</div>
		</div>
	);
};

export default TodoList;
