import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerCreateComponent } from './player-create.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: '', component: PlayerCreateComponent}
];

@NgModule({
  declarations: [PlayerCreateComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports:[PlayerCreateComponent]
})
export class PlayerCreateModule { }
