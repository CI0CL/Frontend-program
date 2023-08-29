import { Component, OnInit } from '@angular/core';
import { Match } from '../shared/match';
import { MatchService } from '../matches/match/match.service';
import { HeaderTextService } from '../header-text.service';

@Component({
  selector: 'ov-matches-overview',
  templateUrl: './matches-overview.component.html',
  styleUrls: ['./matches-overview.component.scss']
})
export class MatchesOverviewComponent implements OnInit {
  matches: Match[]
  match: Match;

  constructor(private headerService: HeaderTextService, protected matchService: MatchService) { }

  ngOnInit() {
    this.headerService.setHeaderText('Matches Page');
  }

}