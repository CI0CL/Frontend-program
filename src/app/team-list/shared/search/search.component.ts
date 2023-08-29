import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'ov-search-team',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output()
  search = new EventEmitter<string>();

  query: string;

  ngOnInit(): void {
  }

  onChange(value: string): void {
    this.search.emit(value);
  }
  searchTeam() {
    this.search.emit(this.query);
  }

  clearSearch() {
    this.query = '';
    this.search.emit('');
  }
  clear(): void {
    this.query = '';
    this.search.emit(this.query);
  }
}
