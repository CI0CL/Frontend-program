import { Component, Input, OnInit } from '@angular/core';
import { Player } from '../shared/player';
import { HeaderTextService } from '../header-text.service';
import { PlayerService } from './player/player.service';

@Component({
  selector: 'ov-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {
     @Input()
     playerList: Player[] = [];

     constructor(private headerService: HeaderTextService, private playerService: PlayerService) { }

     ngOnInit() {
       this.headerService.setHeaderText('Players Page');
       this.loadEntities();
     }
     loadEntities() {
      this.playerService.getplayers().subscribe(data => {
        this.playerList = data;
      });
    }

}
