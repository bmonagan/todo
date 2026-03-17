export class Project {
	constructor(name, priority, todoList = []) {
		this.name = name;
		this.priority = priority;
		this.todoList = Array.isArray(todoList) ? todoList : [];
	}
	changeName(newName) {
		this.name = newName;
	}
	changePriority(newPriority) {
		this.priority = newPriority;
	}
	addTodo(todo) {
		this.todoList.push(todo);
	}
}