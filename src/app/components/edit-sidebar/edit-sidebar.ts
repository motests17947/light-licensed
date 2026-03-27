import { Component, Output, EventEmitter, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CubButton, CubButtonModule } from 'cub-lib-view-rootng/component/button';
import { CubStepper, CubStep, CubStepperModule } from 'cub-lib-view-rootng/component/stepper';

@Component({
  selector: 'app-edit-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    CubButtonModule,
    CubStepperModule,
    CubButton,
    CubStepper,
    CubStep
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './edit-sidebar.html',
  styleUrl: './edit-sidebar.scss'
})
export class EditSidebarComponent {
  expandedConnection: number = 0;

  @Output() closeSidebar = new EventEmitter<void>();
  @Output() submit = new EventEmitter<void>();

  toggleConnection(index: number): void {
    this.expandedConnection = this.expandedConnection === index ? -1 : index;
  }

  onClose(): void {
    this.closeSidebar.emit();
  }

  onSubmit(): void {
    this.submit.emit();
  }
}
