import { Component, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { HeaderTextService } from '../header-text.service';
import { Player } from '../shared/player';
import { PlayerService } from '../player-list/player/player.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ov-player-view',
  templateUrl: 'player-view.component.html',
  styleUrls: ['player-view.component.scss']
})
export class PlayerViewComponent {
  @Input() player: Player;
  imageSrc: string;
  


  private subscription: Subscription;

  constructor(private headerService: HeaderTextService, private playerService :PlayerService, private route: ActivatedRoute) {
    this.headerService.setHeaderText('Player page'); // Set header text in constructor
  }

  ngOnInit() {
    this.loadEntity();
  }

  loadEntity() {
    const id = this.route.snapshot.params['id'];
    this.playerService.getPlayer(id)
    .subscribe((player) => {
      this.player = player;
    });
  }

  getLink(image: string): string{
    return this.imageSrc = "../../assets/player-images/" + image;
  }

  OnUpdate(player2: Player){
    this.player = player2;
    this.playerService.updatePlayer(this.player).subscribe(
      (response) => {
        return response;
      },
      (error) => {
        return error;
      }
      
    );  
  }

  onDelete(){
    if (this.player) {
      this.playerService.deletePlayer(this.player.id).subscribe(() => {
        // Handle successful deletion, e.g., navigate back to a list
      });
    }


  }  

  ngOnDestroy() {
    // Unsubscribe to prevent memory leaks
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
