import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamListComponent } from './team-list.component';
import { TeamComponent } from './team/team.component';



@NgModule({
  declarations: [TeamListComponent, TeamComponent],
  imports: [
    CommonModule
  ],
  exports: [TeamListComponent, TeamComponent]
})
export class TeamListModule { }
