import { Component, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { HeaderTextService } from '../header-text.service';
import { Match } from '../shared/match';
import { MatchService } from '../matches/match/match.service';

import { ActivatedRoute, Route } from '@angular/router';


@Component({
  selector: 'ov-match-view',
  templateUrl: 'match-view.component.html',
  styleUrls: ['match-view.component.scss']
})

export class MatchViewComponent implements OnDestroy {

  @Input() match: Match;

  private subscription: Subscription;


  constructor(private headerService: HeaderTextService, private matchService : MatchService, private route: ActivatedRoute) {

    this.headerService.setHeaderText('Match page'); // Set header text in constructor
  }
  ngOnInit() {
    this.loadEntity();
  }
  
  loadEntity() {
    const id = this.route.snapshot.params['matchId'];
    this.matchService.getMatch(id)
    .subscribe((match) => {
      this.match = match;//
    });
  }

  OnUpdate(match2 : any){
    this.match = match2;
    this.matchService.updateMatch(this.match).subscribe(
      (response) => {
        return response;
      },
      (error) => {
        return error;
      }
      
    );
  }

  onDelete() {
    if (this.match) {
      this.matchService.deleteMatch(this.match.matchId);
    }
  }


  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

};

function ngOnDestroy() {
    throw new Error('Function not implemented.');
  }