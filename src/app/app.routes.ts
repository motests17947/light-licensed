import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main/main';
import { AppTodoPageComponent } from './pages/todo/todos';
import { AppSearchPageComponent } from './pages/search/search';
import { AppCreatePageComponent } from './pages/create/create';
import { AppSwitchPageComponent } from './pages/switch/switch';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: '/todo', pathMatch: 'full' },
      { path: 'todo', component: AppTodoPageComponent },
      { path: 'search', component: AppSearchPageComponent },
      { path: 'create', component: AppCreatePageComponent },
      { path: 'switch', component: AppSwitchPageComponent }
    ]
  }
];
