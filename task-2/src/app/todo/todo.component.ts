import { Component, Input } from '@angular/core';
import { Todo } from '../Models/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  @Input()
  todo: Todo;
}
