import { Component } from '@angular/core';
import { Team } from 'src/app/shared/team';
import { TeamService } from '../team-list/team/team.service';
import { HeaderTextService } from '../header-text.service';

@Component({
  selector: 'ov-team-create',
  templateUrl: './team-create.component.html',
  styleUrls: ['./team-create.component.scss']
})
export class TeamCreateComponent {
  teamData: Partial <Team> = {};
  isTeamCreated: boolean = false;
  successMessage: string='';

  constructor(private teamService: TeamService, private headerService: HeaderTextService) {
    this.headerService.setHeaderText('Create team Page');
  }

  onSubmit(teamData: Partial<Team>){
    const team: Team={
      id: 0,
      name: teamData.name || '',
      country: teamData.country || '',
      city: teamData.city || ''
    };
    this.teamService.createTeam(team).subscribe(
      (response)=>{
        console.log('team created successfully', response);
        this.isTeamCreated = true;
        this.successMessage = 'Team created successfully';
      },
      (error) => {
        console.log('error creating team', error)
      }
    );
  }
}
