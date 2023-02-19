import { Component, Output, Input, EventEmitter } from "@angular/core";
import { Todo } from "../todo/todo";

@Component({
	selector: "app-todo-list",
	templateUrl: "./todo-list.component.html",
	styleUrls: ["./todo-list.component.css"],
})
export class TodoListComponent {
	constructor() {}

	@Input() todo: Todo = {} as Todo;
	@Output() toggleComplete = new EventEmitter<Todo>();
	@Output() deleteTask = new EventEmitter<Todo>();
	@Output() editTask = new EventEmitter<Todo>();

	onToggleCompleat() {
		this.toggleComplete.emit(this.todo);
	}

	onDeleteTask() {
		this.deleteTask.emit(this.todo);
	}

	onEditTask() {
		this.editTask.emit(this.todo);
	}
}
