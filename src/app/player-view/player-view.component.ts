import { Component, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { HeaderTextService } from '../header-text.service';
import { Player } from '../shared/player';
import { PlayerService } from '../player-list/player/player.service';

@Component({
  selector: 'ov-player-view',
  templateUrl: 'player-view.component.html',
  styleUrls: ['player-view.component.scss']
})
export class PlayerViewComponent {
  @Input() player: Player;
  private subscription: Subscription;

  constructor(private headerService: HeaderTextService, private playerService :PlayerService) {
    this.headerService.setHeaderText('Player page'); // Set header text in constructor
  }
  ngOnInit() {
    this.headerService.setHeaderText('Players Page');
    this.loadEntity();
  }
  loadEntity() {
    this.playerService.getPlayer().subscribe(data => {
      this.player = data;
    });

  ngOnDestroy() 
    // Unsubscribe to prevent memory leaks
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  
}
}
function ngOnDestroy() {
    throw new Error('Function not implemented.');
  }
