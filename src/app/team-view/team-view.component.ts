import { Component, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { HeaderTextService } from '../header-text.service';
import { Team } from '../shared/team';

@Component({
  selector: 'ov-team-view',
  templateUrl: 'team-view.component.html',
  styleUrls: ['team-view.component.scss']
})
export class TeamViewComponent implements OnDestroy {
  @Input() team: Team;
  private subscription: Subscription;

  constructor(private headerService: HeaderTextService) {
    this.headerService.setHeaderText('Team page'); // Set header text in constructor
  }

  ngOnDestroy() {
    // Unsubscribe to prevent memory leaks
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}