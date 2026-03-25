import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CubStepper, CubStepperModule } from 'cub-lib-view-rootng';
import { AppCreatePageStep1Component } from './step1/step1';
import { AppCreatePageStep2Component } from './step2/step2';
import { AppCreatePageStep3Component } from './step3/step3';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule, FormsModule, CubStepper, CubStepperModule, AppCreatePageStep1Component, AppCreatePageStep2Component, AppCreatePageStep3Component],
  templateUrl: './create.html',
  styleUrl: './create.scss'
})
export class AppCreatePageComponent {

  connectionTypes = ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'REST API'];

  constructor() { }

}
