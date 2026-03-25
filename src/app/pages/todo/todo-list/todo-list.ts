import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CubTabModule } from 'cub-lib-view-rootng/component/tab';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, CubTabModule ],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.scss'
})
export class AppTodoListComponent {

  constructor() { }
}
