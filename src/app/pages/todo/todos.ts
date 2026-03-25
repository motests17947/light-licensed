import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CubTab, CubTabGroup, CubTabModule } from 'cub-lib-view-rootng/component/tab';
import { AppTodoListComponent } from './todo-list/todo-list';
import { AppCaseTrackingComponent } from './case-tracking/case-tracking';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, CubTab, CubTabGroup, CubTabModule, AppTodoListComponent, AppCaseTrackingComponent ],
  templateUrl: './todos.html',
  styleUrl: './todos.scss'
})
export class AppTodoPageComponent {

  constructor() { }
}
