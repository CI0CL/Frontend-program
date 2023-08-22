import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchesComponent } from './matches.component';
import { MatchComponent } from './match/match.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [MatchesComponent, MatchComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[MatchesComponent, MatchComponent]
})
export class MatchesModule { }
