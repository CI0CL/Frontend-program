import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from 'src/app/shared/player';

@Injectable ({
  providedIn: 'root'
})

export class PlayerService {

  private apiUrl = 'http://localhost:8081/api/players';

  constructor(private http: HttpClient) { }

  getplayers(): Observable<Player[]> {
    return this.http.get<Player[]>(this.apiUrl);
  }
  
  getPlayer(playerId: number): Observable<Player> {
    return this.http.get<Player>(`${this.apiUrl}/${playerId}`);
  }
}