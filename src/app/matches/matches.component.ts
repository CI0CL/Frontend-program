import { Component, Input, OnInit } from '@angular/core';
import { Match } from '../shared/match';
import { HeaderTextService } from '../header-text.service';
import { MatchService } from './match/match.service';

@Component({
  selector: 'ov-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {
    @Input()
    matches: Match[] = [];

    constructor(private headerService: HeaderTextService, private matchService: MatchService) { 
      this.headerService.setHeaderText('Matches Page');
    }
    ngOnInit() {
    this.loadEntities();
  }

    loadEntities() {
      this.matchService.getMatches().subscribe(data => {
        this.matches = data;
      });
    }
    query: string;
    onSearch(query: string): void {
    this.query = query;
  }
}
