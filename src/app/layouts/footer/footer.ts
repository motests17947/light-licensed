import { Component } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CubFooter } from 'cub-lib-view-rootng/component/layout';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CubFooter],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class FooterComponent {}
