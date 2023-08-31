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
  isMatchUpdated: boolean = false;
  isMatchDeleted: boolean = false;
  successMessage: string = '';
  errorMessage: string | null = null;

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

  async OnUpdate(updatedMatch : Match){
    this.match.date = updatedMatch.date
    this.match.time = updatedMatch.time
    this.match.location = updatedMatch.location
    this.match.hometeamscore = updatedMatch.hometeamscore
    this.match.awayteamscore = updatedMatch.awayteamscore
    this.match.hometeam = updatedMatch.hometeam
    this.match.awayteam = updatedMatch.awayteam

    try {
      const homeTeamEntity: Team = await this.teamService.getTeamByName(updatedMatch.hometeam);
      const awayTeamEntity: Team = await this.teamService.getTeamByName(updatedMatch.awayteam);    
      this.homeTeam =  homeTeamEntity;
      this.awayTeam = awayTeamEntity;
    } catch (error) {
      // Handle errors here
    } 

    this.matchService.updateMatch(this.match).subscribe(
      (response) => {
        console.log('Match has been updated successfully', response);
        this.isMatchUpdated = true;
        this.successMessage= 'Match has been updated successfully';
      },
      (error) => {
        console.log('Error updating match', error);
        this.errorMessage = 'Error updating match';
      }
      
    );
  }

  onDelete(){
    if (this.match) {
      this.matchService.deleteMatch(this.match.id).subscribe(
        (response) => {
          console.log('Match has been deleted successfully', response);
          this.isMatchDeleted = true;
          this.successMessage = 'Match has been cancelled';
      },
      (error) => {
        console.log('error deleting match', error);
        this.errorMessage= 'error cancelling match';
      }
      );
    }


  }  

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

};