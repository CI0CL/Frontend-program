import { Component, Input, OnInit } from '@angular/core';
import { Player } from '../shared/player';
import { HeaderTextService } from '../header-text.service';
import { PlayerService } from './player/player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ov-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {
     @Input()
     playerList: Player[] = [];
     filteredPlayerList: Player[] = [];

  
     constructor(private headerService: HeaderTextService, private playerService: PlayerService, private router: Router) { 
      this.headerService.setHeaderText('Players Page');
     }

     ngOnInit() {
       this.loadEntities();
        // Load all players initially
       this.playerService.getPlayers().subscribe((players) => {
      this.playerList = players;
      // Initialize filteredPlayerList with all players
      this.filteredPlayerList = [...this.playerList];
    });
     }
     loadEntities() {
      this.playerService.getPlayers().subscribe(data => {
        this.playerList = data;
      });
    }

  onSearch(query: string) {
    // Handle search events
    if (query) {
      // Perform filtering based on the query
      this.filteredPlayerList = this.playerList.filter((player) =>
        player.name.toLowerCase().includes(query.toLowerCase()) ||
        player.position.toLowerCase().includes(query.toLowerCase()) ||
        player.age.toLocaleString().includes(query.toLowerCase())
      );
    } else {
      // If the query is empty, show all players
      this.filteredPlayerList = [...this.playerList];
    }
  }
}
