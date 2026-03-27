import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private rightSidebarOpenSubject = new BehaviorSubject<boolean>(false);
  private selectedItemSubject = new BehaviorSubject<any>(null);

  rightSidebarOpen$: Observable<boolean> = this.rightSidebarOpenSubject.asObservable();
  selectedItem$: Observable<any> = this.selectedItemSubject.asObservable();

  constructor() { }

  openRightSidebar(item?: any): void {
    if (item) {
      this.selectedItemSubject.next(item);
    }
    this.rightSidebarOpenSubject.next(true);
  }

  closeRightSidebar(): void {
    this.rightSidebarOpenSubject.next(false);
  }

  toggleRightSidebar(): void {
    this.rightSidebarOpenSubject.next(!this.rightSidebarOpenSubject.value);
  }

  getRightSidebarState(): boolean {
    return this.rightSidebarOpenSubject.value;
  }

  setSelectedItem(item: any): void {
    this.selectedItemSubject.next(item);
  }
}
