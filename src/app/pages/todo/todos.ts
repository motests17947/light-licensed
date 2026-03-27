import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppTodoListComponent } from './todo-list/todo-list';
import { AppCaseTrackingComponent } from './case-tracking/case-tracking';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, AppTodoListComponent, AppCaseTrackingComponent],
  templateUrl: './todos.html',
  styleUrl: './todos.scss'
})
export class AppTodoPageComponent {
  activeMainTab: 'case-tracking' | 'todo-list' = 'todo-list';

  setMainTab(tab: 'case-tracking' | 'todo-list'): void {
    this.activeMainTab = tab;
  }
}
