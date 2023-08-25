import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Team } from 'src/app/shared/team';

@Injectable ({
  providedIn: 'root'
})

export class TeamService {

  private apiUrl = 'http://localhost:8081/api/teams'; //NOTE: Error in back-end!

  constructor(private http: HttpClient) { }

  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(this.apiUrl);
  }
}