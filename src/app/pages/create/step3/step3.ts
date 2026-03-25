import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CubCard, CubCardModule, CubStepper, CubStepperModule } from 'cub-lib-view-rootng';

@Component({
  selector: 'app-create-step3',
  standalone: true,
  imports: [CommonModule, FormsModule, CubStepper, CubStepperModule, CubCard, CubCardModule],
  templateUrl: './step3.html',
  styleUrl: './step3.scss'
})
export class AppCreatePageStep3Component {

  connectionTypes = ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'REST API'];

  constructor() { }

}
