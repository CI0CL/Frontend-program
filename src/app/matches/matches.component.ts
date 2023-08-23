import { Component, Input, OnInit } from '@angular/core';
import { Match } from '../shared/match';
import { HeaderTextService } from '../header-text.service';

@Component({
  selector: 'ov-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {
    @Input()
    matches: Match[];

    constructor(private headerService: HeaderTextService) { }

    ngOnInit() {
    this.headerService.setHeaderText('Matches Page');
  }
}
