import { Component } from '@angular/core';
import { TodoDataService } from './todo-data.service';
import { Todo } from './todo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService]
})
export class AppComponent {
  todos: Todo[] = this.getTodos();
  newTodo: Todo = new Todo();

  // Ask Angular DI system to inject the dependency
  // associated with the depency injection token 'TodoDataService'
  // and assign it to a property called 'todoDataService'
  constructor(private todoDataService: TodoDataService) {

  }

  addTodo() {
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  toggleTodoComplete(todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  removeTodo(todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }

  getTodos() {
    return this.todoDataService.getAllTodos();
  }

  // Service is now available at this.todoDataService
  toggleTodoConplete(todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

}
