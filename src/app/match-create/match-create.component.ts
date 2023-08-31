import { Component } from '@angular/core';
import { Match } from '../shared/match';
import { MatchService } from '../matches/match/match.service';
import { HeaderTextService } from '../header-text.service';

@Component({
  selector: 'ov-match-create',
  templateUrl: './match-create.component.html',
  styleUrls: ['./match-create.component.scss']
})
export class MatchCreateComponent {
  matchData: Partial<Match> = {};

  constructor(private matchService: MatchService, private headerService: HeaderTextService) {
    this.headerService.setHeaderText('Create match Page');
  }
  
  onSubmit(matchData: Partial<Match>) {
    const match: Match = {
     id: 0,
     hometeam: matchData.hometeam || '',
     awayteam: matchData.awayteam || '',
     date: matchData.date || '',
     time: matchData.time || '',
     location: matchData.location || '',
     hometeamscore: matchData.hometeamscore || 0,
     awayteamscore: matchData.awayteamscore || 0,
    };
    this.matchService.createMatch(match).subscribe(
      (response) => {
        console.log('Player created successfully', response);
      },
      (error) => {
        console.error('Error creating player', error);
      }
    );
  }
}
