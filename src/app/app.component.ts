import { Component, Input } from '@angular/core';
import { HeaderTextService } from './header-text.service';
import { Player } from './shared/player';
@Component({
  selector: 'ov-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  headerText: string;

  constructor(private headerService: HeaderTextService) {
    this.headerService.headerText$.subscribe(text => {
      this.headerText = text;
    });
  }
}
