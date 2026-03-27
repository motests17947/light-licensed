import { Component, Output, EventEmitter, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CubButton, CubButtonModule } from 'cub-lib-view-rootng/component/button';
import { CubIconButton } from 'cub-lib-view-rootng';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    CubButtonModule,
    CubButton,
    CubIconButton
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class HeaderComponent {

  @Output() toggleLeftSidebar = new EventEmitter<void>();
  @Output() toggleRightSidebar = new EventEmitter<void>();

  toggleSidebar(): void {
    this.toggleLeftSidebar.emit();
  }
}
