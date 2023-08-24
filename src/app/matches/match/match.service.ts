import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Match } from 'src/app/shared/match';

@Injectable({
  providedIn: 'root'
})

export class MatchService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getMatches(): Observable<Match[]> {
    const url = `${this.baseUrl}/api/matches`;
    return this.http.get<Match[]>(url);
  }
}