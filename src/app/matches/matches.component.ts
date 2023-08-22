import { Component, Input } from '@angular/core';
import { MatchComponent } from './match/match.component';
import { Match } from '../shared/match';

@Component({
  selector: 'ov-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent {
    @Input()
    matches: Match[];

    constructor(){}

    ngOnInit(): void{}
}
