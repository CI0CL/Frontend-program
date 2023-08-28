import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
}