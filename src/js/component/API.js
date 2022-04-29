export const getTodos = async () => {
	const response = await fetch(
		"https://assets.breatheco.de/apis/fake/todos/user/DougMontas"
	);
	const payload = await response.json();
	return payload;
};

export const createTodos = async () => {
	await fetch("https://assets.breatheco.de/apis/fake/todos/user/DougMontas", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify([]),
	});
};

export const updateTodos = async (todos /* updatedTodo */) => {
	await fetch("https://assets.breatheco.de/apis/fake/todos/user/DougMontas", {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(todos /* updatedTodo */),
	});
};

export const deleteTodos = async () => {
	const response = await fetch(
		"https://assets.breatheco.de/apis/fake/todos/user/DougMontas",
		{
			method: "DELETE",
		}
	);
};
