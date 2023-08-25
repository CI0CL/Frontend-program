import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatchViewComponent } from './match-view.component';

const routes: Routes = [
  { path: '', component: MatchViewComponent }
];

@NgModule({
  declarations: [MatchViewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [MatchViewComponent]
})
export class MatchViewModule { }