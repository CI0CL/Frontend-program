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
  private subscription: Subscription;

  constructor(private headerService: HeaderTextService, private teamService: TeamService, private router: ActivatedRoute) {
    this.headerService.setHeaderText('Team page'); // Set header text in constructor
  }
  ngOnInit(){
    const id = this.router.snapshot.params['id'];
    this.teamService.getTeam(id).
    subscribe((team) => {
      this.team = team;
    });
  }
  ngOnDestroy() {
    // Unsubscribe to prevent memory leaks
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}