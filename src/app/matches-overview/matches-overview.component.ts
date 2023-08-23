import { Component, Input } from '@angular/core';
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
