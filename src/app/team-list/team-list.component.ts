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

     constructor(private headerService: HeaderTextService, private teamService: TeamService, private router :Router) {
     this.headerService.setHeaderText('Teams Page');}

     ngOnInit() {
       this.loadEntities();
     }
     loadEntities(){
      this.teamService.getTeams().subscribe(data=>{
        this.TeamList = data;
      })
     }
     query: string;
    onSearch(query: string): void {
    this.query = query;
  }
  }