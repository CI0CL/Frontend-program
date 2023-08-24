import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamListComponent } from './team-list.component';
import { TeamComponent } from './team/team.component';
import { SearchComponent } from './shared/search/search.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { TeamFilterPipe } from './shared/search/team-list-filter.pipe';



@NgModule({
  declarations: [TeamListComponent, TeamComponent, SearchComponent, TeamFilterPipe],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule
  ],
  exports: [TeamListComponent, TeamComponent, SearchComponent, TeamFilterPipe]
})
export class TeamListModule { }
