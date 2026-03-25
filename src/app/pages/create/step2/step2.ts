import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CubCard, CubCardModule, CubStepper, CubStepperModule, CubInput } from 'cub-lib-view-rootng';
import { CubButton } from 'cub-lib-view-rootng/component/button';

@Component({
  selector: 'app-create-step2',
  standalone: true,
  imports: [CommonModule, FormsModule, CubStepper, CubStepperModule, CubCard, CubCardModule, CubInput, CubButton],
  templateUrl: './step2.html',
  styleUrl: './step2.scss'
})
export class AppCreatePageStep2Component {

  connectionTypes = ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'REST API'];

  constructor() { }

}
