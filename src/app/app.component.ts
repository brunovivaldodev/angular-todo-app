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
    });

    this.load()


  }

  public add(){
    const title = this.form.controls['title'].value;
    const id = this.todos.length +1 ;
    this.todos.push(new Todo(id, title, false));
    this.save();
    this.clear();
  }

  private clear(){
    this.form.reset()
  }

  public removeTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
    this.save()
  }

  public markAsDone(todo: Todo) {
      todo.done = true;
      this.save()
  }


  public markAsUndone(todo: Todo) {
    todo.done = false;
    this.save()
  }

  private save(){
    const data = JSON.stringify(this.todos);
    localStorage.setItem('todos',data);
  }

  private load (){
    const data = localStorage.getItem('todos') as string;

    const dataParsed = JSON.parse(data);

    return this.todos = dataParsed;
  }
}
