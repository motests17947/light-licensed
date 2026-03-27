import { Component, Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CubHeader } from 'cub-lib-view-rootng/component/layout';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CubIconButton } from 'cub-lib-view-rootng';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    CubHeader,
    CubIconButton
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class HeaderComponent {

  leftOpened: boolean = false;

  @Output() toggleRightSidebar = new EventEmitter<void>();

  leftToggle(): void {
    this.toggleRightSidebar.emit();
  }
}
