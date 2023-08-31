import { Component, Input, OnInit } from '@angular/core';
import { SquareImageService } from './square-image.service';

@Component({
  selector: 'ov-square-image',
  templateUrl: './square-image.component.html',
  styleUrls: ['./square-image.component.scss']
})
export class SquareImageComponent implements OnInit {
  @Input() imageSrc: any;
  @Input() alt: any = "No picture available!"
  
  ngOnInit(): void {}

}
