import { Component, Input, OnInit } from '@angular/core';
import { Team } from 'src/app/shared/team';

@Component({
  selector: 'ov-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  @Input()
     team: Team;

   constructor() { }

   ngOnInit(): void {
   }
}
