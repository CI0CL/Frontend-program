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
  // goToPlayerPage(playerId: number) {
  //   // Navigate to the player page with the player's ID as a parameter
  //   this.router.navigate(['/players', playerId]);
  // }
  viewPlayer(playerId: number) {
    // Navigate to the player view page with the player's ID as a parameter
    this.router.navigate(['/player', playerId]);
  }
}
