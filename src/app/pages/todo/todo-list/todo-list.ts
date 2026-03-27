import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type SubTab = '全部' | '資訊修改' | '單一連線' | '組織連線';

interface FlatRow {
  orgName: string;
  connectionCode: string;
  severIp: string;
  severPort: string;
  clientPort: string;
  status: string;
  podName: string;
  center: string;
}

interface OrgChild {
  orgName: string;
  connectionCode: string;
  severIp: string;
  severPort: string;
  clientPort: string;
  status: string;
  podName: string;
  center: string;
}

interface OrgGroup {
  orgName: string;
  expanded: boolean;
  children: OrgChild[];
}

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.scss'
})
export class AppTodoListComponent {
  activeSubTab: SubTab = '全部';
  subTabs: SubTab[] = ['全部', '資訊修改', '單一連線', '組織連線'];

  flatRows: FlatRow[] = [
    { orgName: 'VISA',       connectionCode: '姓O名', severIp: '姓O名', severPort: '姓O名', clientPort: '姓O名', status: '待覆核', podName: '姓O名', center: '姓O名' },
    { orgName: 'NCCC',       connectionCode: '姓O名', severIp: '姓O名', severPort: '姓O名', clientPort: '姓O名', status: '待覆核', podName: '姓O名', center: '姓O名' },
    { orgName: 'VISA',       connectionCode: '姓O名', severIp: '姓O名', severPort: '姓O名', clientPort: '姓O名', status: '待覆核', podName: '姓O名', center: '姓O名' },
    { orgName: 'NCCC',       connectionCode: '姓O名', severIp: '姓O名', severPort: '姓O名', clientPort: '姓O名', status: '待覆核', podName: '姓O名', center: '姓O名' },
    { orgName: 'VISA',       connectionCode: '姓O名', severIp: '姓O名', severPort: '姓O名', clientPort: '姓O名', status: '待覆核', podName: '姓O名', center: '姓O名' },
    { orgName: 'NCCC',       connectionCode: '姓O名', severIp: '姓O名', severPort: '姓O名', clientPort: '姓O名', status: '待覆核', podName: '姓O名', center: '姓O名' },
    { orgName: 'MasterCard', connectionCode: '姓O名', severIp: '姓O名', severPort: '姓O名', clientPort: '姓O名', status: '待覆核', podName: '姓O名', center: '姓O名' },
    { orgName: 'MasterCard', connectionCode: '姓O名', severIp: '姓O名', severPort: '姓O名', clientPort: '姓O名', status: '待覆核', podName: '姓O名', center: '姓O名' },
    { orgName: 'CardPool',   connectionCode: '姓O名', severIp: '姓O名', severPort: '姓O名', clientPort: '姓O名', status: '待覆核', podName: '姓O名', center: '姓O名' },
    { orgName: 'CardPool',   connectionCode: '姓O名', severIp: '姓O名', severPort: '姓O名', clientPort: '姓O名', status: '待覆核', podName: '姓O名', center: '姓O名' },
  ];

  orgGroups: OrgGroup[] = [
    {
      orgName: 'NCCC',
      expanded: true,
      children: [
        { orgName: 'NCCC', connectionCode: '22222222', severIp: '22222222', severPort: '姓O名', clientPort: '姓O名', status: '待覆核', podName: '姓O名', center: '姓O名' },
        { orgName: 'NCCC', connectionCode: '22222222', severIp: '22222222', severPort: '姓O名', clientPort: '姓O名', status: '待覆核', podName: '姓O名', center: '姓O名' },
        { orgName: 'NCCC', connectionCode: '33333333', severIp: '22222222', severPort: '姓O名', clientPort: '姓O名', status: '待覆核', podName: '姓O名', center: '姓O名' },
        { orgName: 'NCCC', connectionCode: '44444444', severIp: '22222222', severPort: '姓O名', clientPort: '姓O名', status: '待覆核', podName: '姓O名', center: '姓O名' },
      ]
    }
  ];

  setSubTab(tab: SubTab): void {
    this.activeSubTab = tab;
  }

  toggleGroup(group: OrgGroup): void {
    group.expanded = !group.expanded;
  }
}
