import {Project} from "./project.js";
import "./styles.css";
const project_list = document.getElementById("project-list");
const projects = [];

function renderProject(project) {
    const card = document.createElement("div");
    card.className = "project-card";
	const item = document.createElement("div");
	item.className = "project-item";
	item.textContent = `${project.name} ${project.priority} Todos: ${project.todoList.length}`;
    // View button
    const button = document.createElement("button");
    button.textContent = "View";
    button.addEventListener("click", () => {
        alert(`Project: ${project.name}\nPriority: ${project.priority}\nTodos: ${project.todoList.length}`);
    });
    item.appendChild(button);
    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
        const index = projects.indexOf(project);
        if (index > -1) {
            projects.splice(index, 1);
            project_list.removeChild(card);
        }
    });
    item.appendChild(deleteBtn);
	card.appendChild(item);
    project_list.appendChild(card);

}


const test = new Project("Test", "High", []);
projects.push(test);
renderProject(test);

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
	renderProject(project);
	console.log('Created:', project);

	modal.style.display = 'none';
	document.getElementById('name').value     = '';  
	document.getElementById('priority').value = ''; 
});