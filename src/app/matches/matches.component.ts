import { Component, Input } from '@angular/core';
import { MatchComponent } from './match/match.component';

@Component({
  selector: 'ov-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent {
    @Input()
    matches: MatchComponent[];

    constructor(){}

    ngOnInit(): void{}
}
