import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CubLayoutContainer, CubLayoutContent, CubSidebarContent, CubLayoutPanel } from 'cub-lib-view-rootng/component/layout';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HeaderComponent } from "../header/header";
import { FooterComponent } from '../footer/footer';
import { SidebarService } from '../../services/sidebar.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    CubLayoutContainer,
    CubLayoutContent,
    CubSidebarContent,
    CubLayoutPanel,
    HeaderComponent,
    FooterComponent
],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './main.html',
  styleUrl: './main.scss'
})
export class MainLayoutComponent implements OnInit, OnDestroy {

  leftOpened: boolean = false;
  sidebar_open: boolean = false;
  rightSidebarOpen: boolean = false;
  selectedItem: any = null;
  private destroy$ = new Subject<void>();

  constructor(private sidebarService: SidebarService) { }

  ngOnInit(): void {
    this.updateSidebarOpen();
    window.addEventListener('resize', this.updateSidebarOpen.bind(this));

    this.sidebarService.rightSidebarOpen$
      .pipe(takeUntil(this.destroy$))
      .subscribe(isOpen => {
        this.rightSidebarOpen = isOpen;
      });

    this.sidebarService.selectedItem$
      .pipe(takeUntil(this.destroy$))
      .subscribe(item => {
        this.selectedItem = item;
      });
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.updateSidebarOpen.bind(this));
    this.destroy$.next();
    this.destroy$.complete();
  }

  updateSidebarOpen(): void {
    const width = document.documentElement.clientWidth;
    this.sidebar_open = width > 1024;
  }

  leftToggle(opened?: boolean): void {
    console.log('toggle')
    if (opened === undefined) {
      this.leftOpened = !this.leftOpened;
    } else {
      this.leftOpened = opened;
    }
  }

  rightToggle(opened?: boolean): void {
    if (opened === undefined) {
      this.rightSidebarOpen = !this.rightSidebarOpen;
    } else {
      this.rightSidebarOpen = opened;
    }
  }

}
