import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CubCard, CubCardModule, CubInput, CubInputModule, CubLabel, CubLabelModule, CubRadio, CubRadioModule, CubSelect, CubSelectModule } from 'cub-lib-view-rootng';
import { CubButton } from 'cub-lib-view-rootng/component/button';
import { CubFormField, CubFormFieldModule } from 'cub-lib-view-rootng/component/form-field';

@Component({
  selector: 'app-create-step1',
  standalone: true,
  imports: [CommonModule, FormsModule, CubCard, CubCardModule, CubButton, CubFormField, CubLabel, CubLabelModule, ReactiveFormsModule, CubFormFieldModule, CubInput, CubInputModule, CubSelect, CubSelectModule, CubRadio, CubRadioModule],
  templateUrl: './step1.html',
  styleUrl: './step1.scss'
})
export class AppCreatePageStep1Component {

  constructor() { }

  formFieldFormControl = new FormControl('', Validators.required);
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
