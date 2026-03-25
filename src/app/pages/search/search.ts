import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CubTab, CubTabModule } from 'cub-lib-view-rootng';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, CubTab, CubTabModule],
  templateUrl: './search.html',
  styleUrl: './search.scss'
})
export class AppSearchPageComponent {
  connections = [
    { id: 1, name: 'Database Server', status: 'connected', type: 'MySQL' },
    { id: 2, name: 'API Server', status: 'disconnected', type: 'REST' },
    { id: 3, name: 'Cache Server', status: 'connected', type: 'Redis' }
  ];

  constructor() { }
}
