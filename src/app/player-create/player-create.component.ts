import { Component } from '@angular/core';
import { PlayerService } from '../player-list/player/player.service';
import { Player } from '../shared/player';
import { HeaderTextService } from '../header-text.service';

@Component({
  selector: 'ov-player-create',
  templateUrl: './player-create.component.html',
  styleUrls: ['./player-create.component.scss']
})
export class PlayerCreateComponent {
  playerData: Partial<Player> = {};
  isPlayerCreated: boolean = false;
  successMessage: string = '';

  constructor(private playerService: PlayerService, private headerService: HeaderTextService) {
    this.headerService.setHeaderText('Create player Page');
  }
  
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
        this.isPlayerCreated = true;
        this.successMessage = 'Player created successfully';
      },
      (error) => {
        console.error('Error creating player', error);
      }
    );
  }
}