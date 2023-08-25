import { Component, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { HeaderTextService } from '../header-text.service';
import { Match } from '../shared/match';

@Component({
  selector: 'ov-match-view',
  templateUrl: 'match-view.component.html',
  styleUrls: ['match-view.component.scss']
})
export class MatchViewComponent implements OnDestroy {
  @Input() match: Match;
  private subscription: Subscription;

  constructor(private headerService: HeaderTextService) {
    this.headerService.setHeaderText('Match page'); // Set header text in constructor
  }

  ngOnDestroy() {
    // Unsubscribe to prevent memory leaks
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}