import { Component, Input, OnInit } from '@angular/core';
import { Player } from '../shared/player';
import { HeaderTextService } from '../header-text.service';

@Component({
  selector: 'ov-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {
     @Input()
     playerList: Player[];

     constructor(private headerService: HeaderTextService) { }

     ngOnInit() {
       this.headerService.setHeaderText('Players Page');
     }

}
