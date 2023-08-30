import { Component, Input, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { HeaderTextService } from '../header-text.service';
import { Match } from '../shared/match';
import { MatchService } from '../matches/match/match.service';

import { ActivatedRoute, Route } from '@angular/router';
import { Team } from '../shared/team';
import { TeamService } from '../team-list/team/team.service';


@Component({
  selector: 'ov-match-view',
  templateUrl: 'match-view.component.html',
  styleUrls: ['match-view.component.scss']
})

export class MatchViewComponent implements OnDestroy {

  @Input() match: Match;
  @Input() team1: Team;
  @Input() team2: Team;

  private subscription: Subscription;


  constructor(private headerService: HeaderTextService, private matchService : MatchService, private teamService: TeamService, private route: ActivatedRoute) {
    this.headerService.setHeaderText('Match page'); // Set header text in constructor
  }
  ngOnInit() {
    this.loadEntity();
  }
  
  loadEntity() {
    const id = this.route.snapshot.params['id'];
    this.matchService.getMatch(id)
    .subscribe((match) => {
      this.match = match;//
    });
  }

  async OnUpdate(newMatch : any){
    this.match.date = newMatch.date
    this.match.location = newMatch.location
    this.match.team1Score = newMatch.team1Score
    this.match.team2Score = newMatch.team2Score

    try {
      const team1: Team = await this.teamService.getTeamByName(newMatch.team1);
      const team2: Team = await this.teamService.getTeamByName(newMatch.team1);    
      this.match.team1 =  team1;
      this.match.team2 = team2;
    } catch (error) {
      // Handle errors here
    }

    this.matchService.updateMatch(this.match).subscribe(
      (response) => {
        return response;
      },
      (error) => {
        return error;
      }
      
    );
  }

  onDelete() {
    if (this.match) {
      this.matchService.deleteMatch(this.match.id);
    }
  }


  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

};