import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PlayerViewComponent } from './player-view.component';
import { FormsModule } from '@angular/forms';
import { FormComponent } from '../shared/form/form.component';
import { SharedModule } from '../shared/shared.module';


const routes: Routes = [
  { path: '', component: PlayerViewComponent }
];

@NgModule({
  declarations: [PlayerViewComponent],
  imports: [
    SharedModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [PlayerViewComponent]
})
export class PlayerViewModule { }