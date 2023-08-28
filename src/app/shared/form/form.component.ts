import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Player } from '../player';

@Component({
  selector: 'ov-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  formData: any;
  constructor(private http: HttpClient) {} // Inject HttpClient

  updatePlayer(formData: any) {
    if (formData.name != null) {
      this.http.post('http://8081/api/players', formData)
    }
  }

}