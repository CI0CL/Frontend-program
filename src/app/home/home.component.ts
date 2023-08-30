import { Component, OnInit } from '@angular/core';
import { HeaderTextService } from '../header-text.service';


@Component({
  selector: 'ov-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private headerService: HeaderTextService) { 
    this.headerService.setHeaderText('Home Page');
  }

  ngOnInit(): void {

  }

}
