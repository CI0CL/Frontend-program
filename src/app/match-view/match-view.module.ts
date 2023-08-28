import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatchViewComponent } from './match-view.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: '', component: MatchViewComponent}
];

@NgModule({
  declarations: [MatchViewComponent],
  imports: [
    SharedModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [MatchViewComponent]
})
export class MatchViewModule { }