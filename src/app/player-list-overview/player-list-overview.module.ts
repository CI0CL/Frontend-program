import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { PlayerListModule } from '../player-list/player-list.module';
import { PlayerListOverviewComponent } from './player-list-overview.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: PlayerListOverviewComponent}
];

@NgModule({
  declarations: [
    PlayerListOverviewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PlayerListModule,
    RouterModule.forChild(routes)
  ],
  exports: [PlayerListOverviewComponent]
})
export class PlayerlistOverviewModule { }