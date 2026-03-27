import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-all',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './all.html',
  styleUrl: './all.scss'
})
export class SearchAllComponent {
  selectedType = '';
  selectedStatus = '';

  connectionTypes = ['NCCC', 'VISA', 'MasterCard', 'CardPool'];
  statusOptions = ['待覆核', '已覆核'];

  clear(): void {
    this.selectedType = '';
    this.selectedStatus = '';
  }

  search(): void {
    // search logic placeholder
  }
}
