import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Match } from 'src/app/shared/match';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  private baseUrl = 'http://your-backend-api-url'; // Replace with your actual API URL

  constructor(private http: HttpClient) { }

  getMatches(): Observable<Match[]> {
    const url = `${this.baseUrl}/api/matches`;
    return this.http.get<any[]>(url).pipe(
      catchError(this.handleError)
    );
  }

  getMatchById(matchId: number): Observable<Match> {
    const url = `${this.baseUrl}/api/match/${matchId}`;
    return this.http.get<any>(url).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError(error);
  }
}