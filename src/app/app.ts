import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CubCardModule } from 'cub-lib-view-rootng';
import { CubCdkOverlayModule } from 'cub-lib-view-rootng/cdk';
import { OverlayModule } from 'primeng/overlay';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TooltipModule, CubCdkOverlayModule, OverlayModule, CubCardModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('light-link');
}
