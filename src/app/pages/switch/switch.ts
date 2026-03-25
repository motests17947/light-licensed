import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CubCard, CubCardModule, CubSelect, CubSelectModule } from 'cub-lib-view-rootng';

@Component({
  selector: 'app-switch',
  standalone: true,
  imports: [CommonModule, CubCard, CubCardModule, CubSelect, CubSelectModule],
  templateUrl: './switch.html',
  styleUrl: './switch.scss'
})
export class AppSwitchPageComponent {

  constructor() { }

  public options: any[] = [
    { value: 'option-0', label: 'option-0' },
    { value: 'option-1', label: 'option-1' },
    { value: 'option-2', label: 'option-2' },
    { value: 'option-3', label: 'option-3' },
    { value: 'option-4', label: 'option-4' },
    { value: 'option-5', label: 'option-5' },
    { value: 'option-6', label: 'option-6' },
    { value: 'option-7', label: 'option-7' },
    { value: 'option-8', label: 'option-8' },
  ];
}
