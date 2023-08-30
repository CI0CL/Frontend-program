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
  //@Input() homeTeam: Team;
  //@Input() awayTeam: Team;

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
    this.match.date = updatedMatch.date
    this.match.time = updatedMatch.time
    this.match.location = updatedMatch.location
    this.match.hometeamscore = updatedMatch.hometeamscore
    this.match.awayteamscore = updatedMatch.awayteamscore
    this.match.hometeam = updatedMatch.hometeam
    this.match.awayteam = updatedMatch.awayteam

    /*here follows the search by name of Team
    try {
      const homeTeamEntity: Team = await this.teamService.getTeamByName(updatedMatch.hometeam);
      const awayTeamEntity: Team = await this.teamService.getTeamByName(updatedMatch.awayteam);    
      this.match.homeTeamEntity =  homeTeamEntity;
      this.match.awayTeamEntity = awayTeamEntity;
    } catch (error) {
      // Handle errors here
    } */

    this.matchService.updateMatch(this.match).subscribe(
      (response) => {
        return response;
      },
      (error) => {
        return error;
      }
      
    );
  }

  onDelete(){
    if (this.match) {
      this.matchService.deleteMatch(this.match.id).subscribe(() => {
        console.log('Button clicked!')
      });
    }


  }  

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

};