import { Component, Input, OnInit } from '@angular/core';
import { Team } from '../shared/team';
import { HeaderTextService } from '../header-text.service';
import { Router } from '@angular/router';
import { TeamService } from './team/team.service';

@Component({
  selector: 'ov-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent implements OnInit {
     @Input()
     TeamList: Team[] = [];
    filteredTeamList: Team[] = [];
     constructor(private headerService: HeaderTextService, private teamService: TeamService, private router :Router) {
     this.headerService.setHeaderText('Teams Page');}

     ngOnInit() {
      this.loadEntities();
      // Load all players initially
      this.teamService.getTeams().subscribe((team) => {
      this.TeamList = team;
    // Initialize filteredPlayerList with all players
      this.filteredTeamList = [...this.TeamList];
  });
     }
     loadEntities(){
      this.teamService.getTeams().subscribe(data=>{
        this.TeamList = data;
      })
     }
     onSearch(query: string) {
      // Handle search events
      if (query) {
        // Perform filtering based on the query
        this.filteredTeamList = this.TeamList.filter((team) =>
          team.name.toLowerCase().includes(query.toLowerCase()) ||
          team.country.toLowerCase().includes(query.toLowerCase()) ||
          team.city.toLocaleString().includes(query.toLowerCase())
        );
      } else {
        // If the query is empty, show all players
        this.filteredTeamList = [...this.TeamList];
      }
    }
  }