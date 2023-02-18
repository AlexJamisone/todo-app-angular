import { Component, OnInit } from "@angular/core";
import { Todo } from "./todo";
import { TodoService } from "../service/todo.service";

@Component({
	selector: "app-todo",
	templateUrl: "./todo.component.html",
	styleUrls: ["./todo.component.css"],
})
export class TodoComponent implements OnInit {
	constructor(private todoService: TodoService) {}

	todos: Todo[] = [];
	newTask: string = "";

	ngOnInit(): void {
		this.todos = this.todoService.getTodos();
	}

	toggleComplete(todo: Todo) {
		todo.completed = !todo.completed;
		this.todoService.saveTodos(this.todos);
	}
	deleteTask(todo: Todo) {
		const index = this.todos.indexOf(todo);
		this.todos.splice(index, 1);
		this.todoService.saveTodos(this.todos);
	}

	addTask() {
		const newTask: Todo = {
			id: this.todos.length + 1,
			description: this.newTask,
			completed: false,
		};
		this.todos.push(newTask);
		this.todoService.saveTodos(this.todos);
		this.newTask = "";
	}
}
