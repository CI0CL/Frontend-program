import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchesComponent } from './matches.component';
import { MatchComponent } from './match/match.component';



@NgModule({
  declarations: [MatchesComponent, MatchComponent],
  imports: [
    CommonModule
  ],
  exports:[MatchesComponent, MatchComponent]
})
export class MatchesModule { }
