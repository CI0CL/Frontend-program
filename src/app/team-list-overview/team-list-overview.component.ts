import { Component, Input } from '@angular/core';
import { HeaderTextService } from '../header-text.service';
import { Team } from '../shared/team';

@Component({
  selector: 'ov-team-list-overview',
  templateUrl: './team-list-overview.component.html',
  styleUrls: ['./team-list-overview.component.scss']
})
export class TeamListOverviewComponent {
  @Input()
  TeamList: Team[];
  
  query: string;
  onSearch(query: string): void {
    this.query = query;
  }

  constructor(private headerService: HeaderTextService) { }

  ngOnInit() {
    this.headerService.setHeaderText('Teams Page');
  }
}
