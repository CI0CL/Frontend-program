import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MatchCreateComponent } from './match-create.component';

const routes: Routes = [
  { path: '', component: MatchCreateComponent}
];

@NgModule({
  declarations: [MatchCreateComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class MatchCreateModule { }
