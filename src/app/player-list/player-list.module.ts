import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerListComponent } from './player-list.component';
import { PlayerComponent } from './player/player.component';



@NgModule({
  declarations: [PlayerListComponent, PlayerComponent],
  imports: [
    CommonModule,
  ],
  exports:[PlayerComponent, PlayerListComponent]
})
export class PlayerListModule { }
