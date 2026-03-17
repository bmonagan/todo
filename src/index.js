import {Project} from "./project.js";
const project_list = document.getElementById("project-list");


const test = new Project("Test", "High", []);

project_list.append(test.name + " " + test.priority + " " + test.todoList.length)