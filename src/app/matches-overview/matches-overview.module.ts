import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchesOverviewComponent } from './matches-overview.component';
import { MatchesModule } from '../matches/matches.module';
import { Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: MatchesOverviewComponent}
];

@NgModule({
  declarations: [MatchesOverviewComponent],
  imports: [
    CommonModule,
    MatchesModule
  ],
  exports: [MatchesOverviewComponent]
})
export class MatchesOverviewModule { }
