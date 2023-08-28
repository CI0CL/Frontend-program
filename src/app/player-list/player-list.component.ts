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

  
     constructor(private headerService: HeaderTextService, private playerService: PlayerService, private router: Router) { 
      this.headerService.setHeaderText('Players Page');
     }

     ngOnInit() {
       this.loadEntities();
     }
     loadEntities() {
      this.playerService.getplayers().subscribe(data => {
        this.playerList = data;
      });
    }

}
