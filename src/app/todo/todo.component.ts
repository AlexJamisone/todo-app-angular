import { Component, OnInit } from "@angular/core";
import { Todo } from "./todo";

@Component({
	selector: "app-todo",
	templateUrl: "./todo.component.html",
	styleUrls: ["./todo.component.css"],
})
export class TodoComponent implements OnInit {
	constructor() {}

	todos: Todo[] = [];
	newTask: string = "";

	ngOnInit(): void {
		if (localStorage.getItem("todos")) {
			this.todos = JSON.parse(localStorage.getItem("todos") as string);
		}
	}

	toggleComplete(todo: Todo) {
		todo.completed = !todo.completed;
		localStorage.setItem("todos", JSON.stringify(this.todos));
	}
	deleteTask(todo: Todo) {
		const index = this.todos.indexOf(todo);
		this.todos.splice(index, 1);
		localStorage.setItem("todos", JSON.stringify(this.todos));
	}

	addTask() {
		const newTask: Todo = {
			id: this.todos.length + 1,
			description: this.newTask,
			completed: false,
		};
		this.todos.push(newTask);
		this.newTask = "";
		localStorage.setItem("todos", JSON.stringify(this.todos));
	}
}
