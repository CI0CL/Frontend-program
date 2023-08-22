import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerListComponent } from './player-list.component';
import { PlayerComponent } from './player/player.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [PlayerListComponent, PlayerComponent],
  imports: [
    CommonModule,
    FormsModule

  ],
  exports:[PlayerListComponent, PlayerComponent]
})
export class PlayerListModule { }
