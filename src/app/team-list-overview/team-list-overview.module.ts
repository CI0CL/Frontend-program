import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamListOverviewComponent } from './team-list-overview.component';
import { TeamListModule } from '../team-list/team-list.module';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: TeamListOverviewComponent}
];

@NgModule({
  declarations: [TeamListOverviewComponent],
  imports: [
    CommonModule,
    TeamListModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [TeamListOverviewComponent]
})
export class TeamListOverviewModule { }
