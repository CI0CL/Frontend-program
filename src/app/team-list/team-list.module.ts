import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamListComponent } from './team-list.component';
import { TeamComponent } from './team/team.component';
import { SearchComponent } from './shared/search/search.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { TeamFilterPipe } from './shared/search/team-list-filter.pipe';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: TeamListComponent}
];


@NgModule({
  declarations: [TeamListComponent, TeamComponent, SearchComponent, TeamFilterPipe],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    RouterModule.forChild(routes)
  ],
  exports: [TeamListComponent, TeamComponent, SearchComponent, TeamFilterPipe]
})
export class TeamListModule { }
