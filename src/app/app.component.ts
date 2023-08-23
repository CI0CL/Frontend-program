import { Component } from '@angular/core';
import { HeaderTextService } from './header-text.service';

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
