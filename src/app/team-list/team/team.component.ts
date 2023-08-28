import { Component, Input, OnInit } from '@angular/core';
import { Team } from 'src/app/shared/team';
import { Router } from '@angular/router';

@Component({
  selector: 'ov-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  @Input()
     team: Team;

   constructor(private router: Router) { }

  ngOnInit() {}

    viewTeam(teamId: number) {
      // Navigate to the player view page with the player's ID as a parameter
       this.router.navigate(['/team', teamId]);
     }
   }