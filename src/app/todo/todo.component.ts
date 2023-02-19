import { Component, OnInit } from "@angular/core";
import { Todo } from "./todo";
import { TodoService } from "../service/todo.service";
import { ChangeDetectionStrategy } from "@angular/core";
@Component({
	selector: "app-todo",
	templateUrl: "./todo.component.html",
	styleUrls: ["./todo.component.css"],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoComponent implements OnInit {
	constructor(private todoService: TodoService) {}

	todos: Todo[] = [];
	newTask: string = "";
	isInputEmty: boolean = false;
	editingTodo: Todo | null = null;

	editTask(todo: Todo) {
		this.editingTodo = todo;
		this.newTask = todo.description;
	}

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
		if (this.newTask.trim() === "") {
			this.isInputEmty = true;
			return;
		}
		if (this.editingTodo) {
			this.editingTodo.description = this.newTask;
			this.todoService.saveTodos(this.todos);
			this.editingTodo = null;
			this.newTask = "";
		} else {
			this.isInputEmty = false;
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

	onInput() {
		this.isInputEmty = false;
	}
}
