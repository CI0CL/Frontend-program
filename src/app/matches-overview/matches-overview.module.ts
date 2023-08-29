import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchesOverviewComponent } from './matches-overview.component';
import { MatchesModule } from '../matches/matches.module';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: MatchesOverviewComponent}
];

@NgModule({
  declarations: [MatchesOverviewComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatchesModule,
    RouterModule.forChild(routes)
  ],
  exports: [MatchesOverviewComponent]
})
export class MatchesOverviewModule { }
