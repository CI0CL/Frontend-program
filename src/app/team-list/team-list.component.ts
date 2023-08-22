import { Component, Input, OnInit } from '@angular/core';
import { Team } from '../shared/team';

@Component({
  selector: 'ov-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent implements OnInit {
  @Input()
     TeamList: Team[];

   constructor() { }

   ngOnInit(): void {
   }
  }
