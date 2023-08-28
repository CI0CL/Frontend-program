/*import { Component, Input } from '@angular/core';
import { Match } from 'src/app/shared/match';

@Component({
  selector: 'ov-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent {
  @Input()
  match: Match;
  
  constructor(){}

  ngOnInit(): void{}

}
*/
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Match } from 'src/app/shared/match';

@Component({
  selector: 'ov-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit{
  @Input() match: Match;

  constructor(private router: Router) { }

  ngOnInit(): void { }

  viewPlayer(matchId: number) {
    // Navigate to the player view page with the player's ID as a parameter
    this.router.navigate(['/match', matchId]);
  }
}
