import {Project} from "./project.js";
import {Todo} from "./todo.js";
import "./styles.css";
const project_list = document.getElementById("project-list");
const projects = [];

function createProjectCard(project, index) {
    const card = document.createElement("div");
    card.className = "project-card";

    const item = document.createElement("div");
    item.className = "project-item";

    const summary = document.createElement("span");
    summary.textContent = `${project.name} ${project.priority} Todos: ${project.todoList.length}`;
    item.appendChild(summary);

    const viewBtn = document.createElement("button");
    viewBtn.textContent = "View";
    viewBtn.dataset.action = "view";
    viewBtn.dataset.index = String(index);
    item.appendChild(viewBtn);

    const addTodoBtn = document.createElement("button");
    addTodoBtn.textContent = "Add Todo";
    addTodoBtn.dataset.action = "add-todo";
    addTodoBtn.dataset.index = String(index);
    item.appendChild(addTodoBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.dataset.action = "delete";
    deleteBtn.dataset.index = String(index);
    item.appendChild(deleteBtn);

    card.appendChild(item);
    return card;
}

function renderProjects() {
    project_list.textContent = "";
    projects.forEach((project, index) => {
        project_list.appendChild(createProjectCard(project, index));
    });
}

project_list.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) {
        return;
    }

    const index = Number(button.dataset.index);
    const action = button.dataset.action;
    if (!Number.isInteger(index) || index < 0 || index >= projects.length) {
        return;
    }

    const project = projects[index];
    if (action === "view") {
        alert(`Project: ${project.name}\nPriority: ${project.priority}\nTodos: ${project.todoList.length}`);
        return;
    }

    if (action === "add-todo") {
        const title = prompt("Todo title:");
        if (!title || !title.trim()) {
            return;
        }

        const todo = new Todo(title.trim(), "", "", "", "");
        project.addTodo(todo);
        renderProjects();
        return;
    }

    if (action === "delete") {
        projects.splice(index, 1);
        renderProjects();
    }
});


const test = new Project("Test", "High", []);
projects.push(test);
renderProjects();

const modal     = document.getElementById('modal');
const openBtn   = document.getElementById('newProjectBtn');
const submitBtn = document.getElementById('submitBtn');
const cancelBtn = document.getElementById('cancelBtn');

// open
openBtn.addEventListener('click', () => {
	modal.style.display = 'flex';
});

// close
cancelBtn.addEventListener('click', () => {
	modal.style.display = 'none';
});

// close on backdrop click
modal.addEventListener('click', (e) => {
	if (e.target === modal) modal.style.display = 'none'; 
});

// submit
submitBtn.addEventListener('click', () => {
	const name     = document.getElementById('name').value.trim();
	const priority = document.getElementById('priority').value.trim();

	if (!name || !priority) {
		alert('Please fill out all fields');
		return;
	}

	const project = new Project(name, priority);
	projects.push(project);
    renderProjects();
	console.log('Created:', project);

	modal.style.display = 'none';
	document.getElementById('name').value     = '';  
	document.getElementById('priority').value = ''; 
});