import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {MatFormFieldControl, MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'ov-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
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

  clear(): void {
    this.query = '';
    this.search.emit(this.query);
  }
}
