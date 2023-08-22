import { Component, Input, OnInit } from '@angular/core';
import { Player } from '../shared/player';

@Component({
  selector: 'ov-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent {
     @Input()
     playerList: Player[];

   constructor() { }

   ngOnInit(): void {
   }
}
