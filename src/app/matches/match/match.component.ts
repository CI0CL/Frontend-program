import { Component, Input } from '@angular/core';

@Component({
  selector: 'ov-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent {
  @Input()
  match: MatchComponent;
  
  constructor(){}

  ngOnInit(): void{}

}
