import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Match } from 'src/app/shared/match';

@Injectable ({
  providedIn: 'root'
})

export class MatchService {

  private apiUrl = 'http://localhost:8081/api/matches';

  constructor(private http: HttpClient) { }

  getMatches(): Observable<Match[]> {
    return this.http.get<Match[]>(this.apiUrl);
  }

  getMatch(matchId: number): Observable<Match> {
    return this.http.get<Match>(`${this.apiUrl}/${matchId}`);
  }

  deleteMatch(matchId: number): Observable<Match>{
    return this.http.delete<Match>(`${this.apiUrl}/${matchId}`);
  }

  updateMatch(match : Match) {
    const useUrl: string = `${this.apiUrl}/${match.id}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })

    const dataToUpdate = {
      hometeam: match.hometeam,
      awayteam: match.awayteam,
      hometeamscore: match.hometeamscore,
      awayteamscore: match.awayteamscore,
      date: match.date,
      time: match.time,
      location: match.location
    };

    return this.http.put<Match>(useUrl,
      dataToUpdate, {headers});
  }
  searchMatches(query: string): Observable<Match[]> {
    const searchUrl = `${this.apiUrl}/search?query=${query}`;
    return this.http.get<Match[]>(searchUrl);
  }
}