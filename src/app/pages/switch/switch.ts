import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CubCard, CubCardModule } from 'cub-lib-view-rootng';
import { CubTabModule } from 'cub-lib-view-rootng/component/tab';
import { CubSelect, CubSelectModule, CubOption } from 'cub-lib-view-rootng';
import { CubRadio, CubRadioGroup, CubRadioModule } from 'cub-lib-view-rootng/component/radio';
import { CubCheckbox, CubCheckboxModule } from 'cub-lib-view-rootng/component/checkbox';
import { CubButton, CubButtonModule } from 'cub-lib-view-rootng/component/button';
import { CubTable, CubTableModule } from 'cub-lib-view-rootng';
import { CubTemplate } from 'cub-lib-view-rootng';
import { EditSidebarComponent } from '../../components/edit-sidebar/edit-sidebar';

@Component({
  selector: 'app-switch',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CubCard,
    CubCardModule,
    CubTabModule,
    CubSelect,
    CubSelectModule,
    CubOption,
    CubRadio,
    CubRadioGroup,
    CubRadioModule,
    CubCheckbox,
    CubCheckboxModule,
    CubButton,
    CubButtonModule,
    CubTable,
    CubTableModule,
    CubTemplate,
    EditSidebarComponent,
  ],
  templateUrl: './switch.html',
  styleUrl: './switch.scss'
})
export class AppSwitchPageComponent {

  activeTabIndex = 0;
  activeOrgTabIndex = 0;
  sidebarVisible = false;

  selectedConnectionType = 'nccc';
  selectedCenter = '内湖';

  connectionTypeOptions = [
    { value: 'nccc', label: 'NCCC' },
    { value: 'visa', label: 'VISA' },
    { value: 'mastercard', label: 'MasterCard' },
    { value: 'cardpool', label: 'CardPool' },
  ];

  centerOptions = [
    { value: '内湖', label: '內湖' },
    { value: '青埔', label: '青埔' },
  ];

  clusterOptions = [
    { value: 'A', label: '選項A', checked: true },
    { value: 'B', label: '選項B', checked: true },
    { value: 'C', label: '選項C', checked: false },
    { value: 'D', label: '選項D', checked: false },
    { value: 'E', label: '選項E', checked: false },
    { value: 'F', label: '選項F', checked: false },
  ];

  orgTabs = ['NCCC', 'VISA', 'MasterCard', 'CardPool'];

  orgTableData = [
    {
      orgName: 'NCCC',
      connectionCount: 4,
      centers: '內湖, 青埔',
      status: 'SIGN ON',
      lastOperator: '胡ＯＯ',
    },
  ];

  onClear(): void {
    this.selectedConnectionType = '';
    this.selectedCenter = '';
    this.clusterOptions.forEach(opt => opt.checked = false);
  }

  onSearch(): void {
    console.log('查詢', {
      connectionType: this.selectedConnectionType,
      center: this.selectedCenter,
      clusters: this.clusterOptions.filter(o => o.checked).map(o => o.value),
    });
  }

  onView(row: any): void {
    console.log('查看', row);
    this.sidebarVisible = true;
  }

  onCloseSidebar(): void {
    this.sidebarVisible = false;
  }

  onSubmitSidebar(): void {
    console.log('提交編輯');
    this.sidebarVisible = false;
  }
}
