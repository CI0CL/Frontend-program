import { Component, Input, OnInit } from '@angular/core';
import { Player } from '../../shared/player'
import { Router } from '@angular/router';

@Component({
  selector: 'ov-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  
  @Input() player: Player;

  constructor(private router: Router){}

  ngOnInit(): void {
  }

  viewPlayer(playerId: number) {
    this.router.navigate(['/player', playerId]);
  }
}
