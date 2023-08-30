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
  @Input() homeTeam: Team;
  @Input() awayTeam: Team;

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
      this.match = match;
    });
  }

  async OnUpdate(updatedMatch : any){
    this.match.matchId = updatedMatch.id
    this.match.date = updatedMatch.date
    this.match.location = updatedMatch.location
    this.match.homeTeamScore = updatedMatch.homeTeamScore
    this.match.awayTeamScore = updatedMatch.awayTeamScore

    try {
      const homeTeam: Team = await this.teamService.getTeamByName(updatedMatch.homeTeam);
      const awayTeam: Team = await this.teamService.getTeamByName(updatedMatch.homeTeam);    
      this.match.homeTeam =  homeTeam;
      this.match.awayTeam = awayTeam;
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