import {
	TuiRootModule,
	TuiDialogModule,
	TuiAlertModule,
	TuiButtonModule,
} from "@taiga-ui/core";
import { TuiInputModule, TuiCheckboxModule } from "@taiga-ui/kit";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { TodoComponent } from "./todo/todo.component";

@NgModule({
	declarations: [AppComponent, TodoComponent],
	imports: [
		BrowserModule,
		FormsModule,
		BrowserAnimationsModule,
		TuiRootModule,
		TuiDialogModule,
		TuiAlertModule,
		ReactiveFormsModule,
		TuiInputModule,
		TuiButtonModule,
		TuiCheckboxModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
