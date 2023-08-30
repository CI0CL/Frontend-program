import { Component } from '@angular/core';
import { PlayerService } from '../player-list/player/player.service';
import { Player } from '../shared/player';

@Component({
  selector: 'ov-player-create',
  templateUrl: './player-create.component.html',
  styleUrls: ['./player-create.component.scss']
})
export class PlayerCreateComponent {
  playerData: Partial<Player> = {};

  constructor(private playerService: PlayerService) {}
  
  onSubmit(playerData: Partial<Player>) {
    const player: Player = {
      id: 0, 
      name: playerData.name || '',
      age: playerData.age || 0,
      position: playerData.position || '',
      number: playerData.number || 0
    };
    this.playerService.createPlayer(player).subscribe(
      (response) => {
        console.log('Player created successfully', response);
      },
      (error) => {
        console.error('Error creating player', error);
      }
    );
  }
}