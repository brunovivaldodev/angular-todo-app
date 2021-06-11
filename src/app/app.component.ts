import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Todo from 'src/Models/Todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public todos: Todo[] = [];
  public form: FormGroup;
  title = 'Todo App';

  constructor(private fb : FormBuilder) {

    this.form = this.fb.group({
      title : ['',Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.required
      ])]
    })

    this.todos.push(new Todo(1, "Comer", true));
    this.todos.push(new Todo(2, "Viajar", false));
    this.todos.push(new Todo(3, "Sair", false));

  }

  public removeTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);

    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }

  public markAsDone(todo: Todo) {
      todo.done = true
  }


  public markAsUndone(todo: Todo) {
    todo.done = false

  }
}
