import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TeamViewComponent } from './team-view.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: TeamViewComponent }
];

@NgModule({
  declarations: [TeamViewComponent],
  imports: [
    SharedModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [TeamViewComponent]
})
export class TeamViewModule { }