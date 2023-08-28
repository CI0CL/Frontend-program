import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerListComponent } from './player-list.component';
import { PlayerComponent } from './player/player.component';
import { SharedModule } from "../shared/shared.module";
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './shared/search/search.component';
import { PlayerFilterPipe } from './shared/search/player-list-filter.pipe';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: PlayerListComponent}
];

@NgModule({
  declarations: [PlayerListComponent, PlayerComponent, SearchComponent, PlayerFilterPipe],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    RouterModule.forChild(routes)
    

  ],
  exports:[PlayerListComponent, PlayerComponent, SearchComponent, PlayerFilterPipe]
})
export class PlayerListModule { }
