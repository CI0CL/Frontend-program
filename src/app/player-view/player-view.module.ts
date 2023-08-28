import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PlayerViewComponent } from './player-view.component';
import { FormsModule } from '@angular/forms';
import { FormComponent } from '../shared/form/form.component';


const routes: Routes = [
  { path: '', component: PlayerViewComponent }
];

@NgModule({
  declarations: [PlayerViewComponent, FormComponent],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [PlayerViewComponent, FormComponent]
})
export class PlayerViewModule { }