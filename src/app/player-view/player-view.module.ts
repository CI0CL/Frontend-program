import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PlayerViewComponent } from './player-view.component';

const routes: Routes = [
  { path: '', component: PlayerViewComponent }
];

@NgModule({
  declarations: [PlayerViewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [PlayerViewComponent]
})
export class PlayerViewModule { }