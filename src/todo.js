export class Todo {
    constructor(title, description, dueDate, priority, notes) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.finished = false;
    }
    FinishTodo() {
        this.finished = true;
    }

}

    
