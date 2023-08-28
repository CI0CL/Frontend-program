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

  updateMatch(match : Match) {

    const useUrl: string = `${this.apiUrl}/${match.matchId}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })

    const dataToUpdate = {
      team1: match.team1,
      team2: match.team2,
      team1Score: match.team1Score,
      team2Score: match.team2Score,
      date: match.date,
      time: match.time,
      location: match.location
    };

    // NOTE: Patch mapping DOES NOT work here: inform backend!
    return this.http.put<Match>(useUrl,
      dataToUpdate, {headers});
  }