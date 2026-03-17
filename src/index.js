import {Project} from "./project.js";
import "./styles.css";
const project_list = document.getElementById("project-list");
const projects = [];

function renderProject(project) {
  const item = document.createElement("div");
  item.className = "project-item";
  item.textContent = `${project.name} ${project.priority} Todos: ${project.todoList.length}`;
  project_list.append(item);
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
  const priority = Number(document.getElementById('priority').value);

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