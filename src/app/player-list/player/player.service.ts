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

  getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(this.apiUrl);
  }
  
  getPlayer(playerId: number): Observable<Player> {
    return this.http.get<Player>(`${this.apiUrl}/${playerId}`);
  }

  updatePlayer(player: Player): Observable<Player> {

    const useUrl: string = `${this.apiUrl}/${player.id}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'*'
    })
    const dataToUpdate = {
      name: player.name,
      age: player.age,
      position: player.position,
      number: player.number
    };
    
    return this.http.patch<Player>(useUrl, dataToUpdate, {headers});
  }
}