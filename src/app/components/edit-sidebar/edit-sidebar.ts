import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-sidebar',
  standalone: true,
  imports: [CommonModule],
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
