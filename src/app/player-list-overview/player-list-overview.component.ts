import { Component, OnInit } from '@angular/core';
import { Player } from '../shared/player';

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

  ngOnInit(): void {
  }
}
