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
import { Component, Input } from '@angular/core';
import { Match } from 'src/app/shared/match';

@Component({
  selector: 'ov-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent {
  @Input() match: Match;

  constructor() { }

  ngOnInit(): void { }
}
