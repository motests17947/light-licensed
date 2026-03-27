import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CubTab, CubTabGroup, CubTabModule } from 'cub-lib-view-rootng/component/tab';
import { SearchAllComponent } from './all/all';
import { SearchActiveComponent } from './active/active';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, CubTab, CubTabGroup, CubTabModule, SearchAllComponent, SearchActiveComponent],
  templateUrl: './search.html',
  styleUrl: './search.scss'
})
export class AppSearchPageComponent {}
