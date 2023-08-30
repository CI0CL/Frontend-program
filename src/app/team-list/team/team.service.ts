import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Team } from 'src/app/shared/team';

@Injectable({
  providedIn: 'root'
})

export class TeamService {


  private apiUrl = 'http://localhost:8081/api/teams';
  team: Team

  constructor(private http: HttpClient) { }

  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(this.apiUrl);
  }

  async getTeamByName(teamName: string): Promise<Team> {
    try {
      const response = await this.http.get<Team>(`${this.apiUrl}/by-name/${teamName}`).toPromise();
      return response;
    } catch (error) {
      // Handle errors here
      throw error;
    }
  }

  getTeam(teamId: number): Observable<Team> {
    return this.http.get<Team>(`${this.apiUrl}/${teamId}`);
  }

  deleteTeam(teamId: number) {
    return this.http.delete<Team>(`${this.apiUrl}/${teamId}`);
  }

  updateTeam(team: Team): Observable<Team> {
    const useUrl: string = `${this.apiUrl}/${team.id}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })
    const dataToUpdate = {
      name: team.name,
      country: team.country,
      city: team.city
    };
    return this.http.put<Team>(useUrl,
      dataToUpdate, { headers });
  }
  searchPlayer(query: string): Observable<Team[]> {
    const searchUrl = `${this.apiUrl}/search?query=${query}`;
    return this.http.get<Team[]>(searchUrl);
  }
}

