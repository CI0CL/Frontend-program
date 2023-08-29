import { Component, Input } from '@angular/core';
import { HeaderTextService } from '../header-text.service';
import { Team } from '../shared/team';
import { TeamService } from '../team-list/team/team.service';

@Component({
  selector: 'ov-team-list-overview',
  templateUrl: './team-list-overview.component.html',
  styleUrls: ['./team-list-overview.component.scss']
})
export class TeamListOverviewComponent {
  TeamList: Team[];
  team: Team;

  constructor(private headerService: HeaderTextService, protected teamService: TeamService) { }

  ngOnInit() {
    this.headerService.setHeaderText('Teams Page');
  }
}
