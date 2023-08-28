import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Team } from 'src/app/shared/team';

@Injectable ({
  providedIn: 'root'
})

export class TeamService {

  private apiUrl = 'http://localhost:8081/api/teams';

  constructor(private http: HttpClient) { }

  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(this.apiUrl);
  }

  getTeam(teamId: number): Observable<Team> {
    return this.http.get<Team>(`${this.apiUrl}/${teamId}`);
  }

  updateTeam(team: Team): Observable<Team> {

    const useUrl: string = `${this.apiUrl}/${team.id}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
  })
  const dataToUpdate = {
    team_name: team.name,
    country: team.country,
    city: team.city
  };
  return this.http.patch<Team>(useUrl,
    dataToUpdate, {headers});
  }
}

