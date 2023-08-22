import { Component, Input, OnInit } from '@angular/core';
import { Player } from '../../shared/player'

@Component({
  selector: 'ov-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  @Input() player: Player;

  constructor(){}

  ngOnInit(): void {
  }

}
