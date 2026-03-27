import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CubTabModule } from 'cub-lib-view-rootng/component/tab';
import { CubButton, CubButtonModule, CubTable, CubTableModule } from 'cub-lib-view-rootng';
import { SidebarService } from '../../../services/sidebar.service';

@Component({
  selector: 'app-case-tracking',
  standalone: true,
  imports: [CommonModule, CubTabModule, CubTable, CubTableModule, CubButton, CubButtonModule ],
  templateUrl: './case-tracking.html',
  styleUrl: './case-tracking.scss'
})
export class AppCaseTrackingComponent {

  constructor(private sidebarService: SidebarService) { }

  userList: any[] = [
    {
      id: "00001",
      title: "短文字短文字",
      userName: "姓O名",
      date: "yyyy/mm/dd",
      amount: 10000000,
    },
    {
      id: "00002",
      title: "短文字",
      userName: "姓O名",
      date: "yyyy/mm/dd",
      amount: 10000000,
    },
    {
      id: "00003",
      title: "短文字短文字短文字",
      userName: "姓O名",
      date: "yyyy/mm/dd",
      amount: 10000000,
    },
  ];

  onEdit(user: any): void {
    console.log('編輯用户:', user);
    this.sidebarService.openRightSidebar(user);
  }
}
