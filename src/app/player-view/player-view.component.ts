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
  isPlayerUpdated: boolean = false;
  isPlayerDeleted: boolean = false;
  successMessage: string = '';
  errorMessage: string | null = null;


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
        console.log('player has been updated successfully', response);
        this.isPlayerUpdated = true;
        this.successMessage = 'Player has been updated successfully';
      },
      (error) => {
        console.log('error during player update', error);
        this.errorMessage = 'Error updating player';
      }
      
    );  
  }

  onDelete(){
    if (this.player) {
      this.playerService.deletePlayer(this.player.id).subscribe(
        (response) => {
          console.log('player has been deleted successfully', response);
          this.isPlayerDeleted = true;
          this.successMessage = 'Player has been deleted';
        },
        (error)=> {
          console.log('error deleting player',error);
          this.errorMessage = 'Error deleting player';
        }
        );
    }


  }  

  ngOnDestroy() {
    // Unsubscribe to prevent memory leaks
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
