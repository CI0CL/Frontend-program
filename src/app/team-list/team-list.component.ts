import { Component, Input, OnInit } from '@angular/core';
import { Team } from '../shared/team';
import { HeaderTextService } from '../header-text.service';

@Component({
  selector: 'ov-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent implements OnInit {
     @Input()
     TeamList: Team[];

     constructor(private headerService: HeaderTextService) { }

     ngOnInit() {
       this.headerService.setHeaderText('Teams Page');
     }
  }
