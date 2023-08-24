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
  matches: Match[] = [];

  constructor(private headerService: HeaderTextService, private matchService: MatchService) { }


  loadMatches(): void {
    this.matchService.getMatches().subscribe(
      data => this.matches = data,
      error => console.error(error)
    );
  }
  ngOnInit() {
    this.headerService.setHeaderText('Matches Page');
    this.loadMatches();
  }
  
  query: string;
  onSearch(query: string): void {
    this.query = query;
  }

}