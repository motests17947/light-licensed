import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ConnectionResult {
  connectionId: string;
  connectionName: string;
  lastModifier: string;
  lastModifiedTime: string;
  status: string;
}

@Component({
  selector: 'app-search-active',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './active.html',
  styleUrl: './active.scss'
})
export class SearchActiveComponent {
  selectedType = 'NCCC';
  selectedStatus = '';

  connectionTypes = ['NCCC', 'VISA', 'MasterCard', 'CardPool'];
  statusOptions = ['待覆核', '已覆核'];

  results: ConnectionResult[] = [
    { connectionId: '00000004', connectionName: 'NCCC 發卡授權', lastModifier: '99101', lastModifiedTime: '2026.1.24', status: '已覆核' },
    { connectionId: '00000004', connectionName: 'NCCC 發卡授權', lastModifier: '99101', lastModifiedTime: '2026.1.17', status: '已覆核' },
    { connectionId: '00000005', connectionName: 'NCCC 發卡授權', lastModifier: '90917', lastModifiedTime: '2021.10.3', status: '已覆核' },
    { connectionId: '00000006', connectionName: 'NCCC 發卡授權', lastModifier: '92833', lastModifiedTime: '2016.3.5', status: '已覆核' },
  ];

  currentPage = 3;
  totalPages = 1;

  clear(): void {
    this.selectedType = '';
    this.selectedStatus = '';
  }

  search(): void {
    // search logic placeholder
  }

  onView(item: ConnectionResult): void {
    console.log('查看:', item);
  }

  prevPage(): void {
    if (this.currentPage > 1) this.currentPage--;
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) this.currentPage++;
  }
}
