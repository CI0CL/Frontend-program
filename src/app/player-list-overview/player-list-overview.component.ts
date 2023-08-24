import { Component, OnInit } from '@angular/core';
import { Player } from '../shared/player';
import { HeaderTextService } from '../header-text.service';

@Component({
  selector: 'ov-player-list-overview',
  templateUrl: './player-list-overview.component.html',
  styleUrls: ['./player-list-overview.component.scss']
})
export class PlayerListOverviewComponent implements OnInit {
  playerlist: Player[]

  query: string;
  onSearch(query: string): void {
    this.query = query;
  }

  constructor(private headerService: HeaderTextService) { }

  ngOnInit() {
    this.headerService.setHeaderText('Home Page');
  }
}
