/*import { Component, Input } from '@angular/core';
import { HeaderTextService } from '../header-text.service';
import { Match } from '../shared/match';

@Component({
  selector: 'ov-matches-overview',
  templateUrl: './matches-overview.component.html',
  styleUrls: ['./matches-overview.component.scss']
})
export class MatchesOverviewComponent {
  @Input()
  matches: Match[];

  constructor(private headerService: HeaderTextService) { }

  ngOnInit() {
    this.headerService.setHeaderText('Matches Page');
  }
}
*/
import { Component, OnInit } from '@angular/core';
import { Match } from '../shared/match';
import { MatchService } from '../matches/match/match.service';

@Component({
  selector: 'ov-matches-overview',
  templateUrl: './matches-overview.component.html',
  styleUrls: ['./matches-overview.component.scss']
})
export class MatchesOverviewComponent implements OnInit {
  matches: Match[] = [];

  constructor(private matchService: MatchService) { }

  ngOnInit(): void {
    this.loadMatches();
  }

  loadMatches(): void {
    this.matchService.getMatches().subscribe(
      data => this.matches = data,
      error => console.error(error)
    );
  }
}