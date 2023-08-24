import { Component, Input } from '@angular/core';
import { Player } from '../shared/player';
import { HeaderTextService } from '../header-text.service';

@Component({
  selector: 'ov-player-view',
  templateUrl: './player-view.component.html',
  styleUrls: ['./player-view.component.scss']
})
export class PlayerViewComponent {
  @Input() player: Player;

  constructor(private headerService: HeaderTextService) { }

  ngOnInit() {
    this.headerService.setHeaderText('Player page'); // Optional: Player name?
  }

}