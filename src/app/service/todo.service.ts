import { Injectable } from "@angular/core";
import { Todo } from "../todo/todo";

@Injectable({
	providedIn: "root",
})
export class TodoService {
	private localStorageKey = "todos";

	constructor() {}

	getTodos(): Todo[] {
		const todosJson = localStorage.getItem(this.localStorageKey);
		return todosJson ? JSON.parse(todosJson) : [];
	}
	saveTodos(todos: Todo[]): void {
		localStorage.setItem(this.localStorageKey, JSON.stringify(todos));
	}
}
