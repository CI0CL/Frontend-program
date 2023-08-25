import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TeamViewComponent } from './team-view.component';

const routes: Routes = [
  { path: '', component: TeamViewComponent }
];

@NgModule({
  declarations: [TeamViewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [TeamViewComponent]
})
export class TeamViewModule { }