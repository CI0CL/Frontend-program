import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from 'src/app/shared/player';

@Injectable ({
  providedIn: 'root'
})

export class PlayerService {

  private apiUrl = 'http://localhost:8081/api/players';

  constructor(private http: HttpClient) { }

  getMatches(): Observable<Player[]> {
    return this.http.get<Player[]>(this.apiUrl);
  }
  getPlayer(): Observable<Player>{
    return this.http.get<Player>(this.apiUrl)
  }
}