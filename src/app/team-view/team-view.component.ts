import { Component, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { HeaderTextService } from '../header-text.service';
import { Team } from '../shared/team';
import { PlayerService } from '../player-list/player/player.service';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from '../team-list/team/team.service';

@Component({
  selector: 'ov-team-view',
  templateUrl: 'team-view.component.html',
  styleUrls: ['team-view.component.scss']
})
export class TeamViewComponent {
  @Input() team: Team;
  isTeamUpdated: boolean = false;
  successMessage: string = '';
  isTeamDeleted: boolean = false;
  private subscription: Subscription;

  constructor(private headerService: HeaderTextService, private teamService: TeamService, private route: ActivatedRoute) {
    this.headerService.setHeaderText('Team page'); // Set header text in constructor
  }

  ngOnInit() {
    this.loadEntity();
  }

  loadEntity() {
    const id = this.route.snapshot.params['id'];
    this.teamService.getTeam(id)
    .subscribe((team) => {
      this.team = team;
    });
  }

  OnUpdate(awayTeam: any) {
    this.team = awayTeam;
    this.teamService.updateTeam(this.team).subscribe(
      (response) => {
        console.log('team has been updated successfully', response);
        this.isTeamUpdated = true;
        this.successMessage = 'team has been updated successfully';
      },
      (error) => {
        return error;
      }

    );
  }

  onDelete() { // cannot delete or update a parent row?
    if (this.team) {
      this.teamService.deleteTeam(this.team.id).subscribe(
        (response) => {
        console.log('team has been deleted', response);
        this.isTeamDeleted = true;
        this.successMessage = 'team has been deleted';
      },
      (error)=>{
        console.log('there has been an error', error);
      });
    }
  }

  ngOnDestroy() {
    // Unsubscribe to prevent memory leaks
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
