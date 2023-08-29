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

  deletePlayer(playerId: number): Observable<Player> {
    return this.http.delete<Player>(`${this.apiUrl}/${playerId}`);
  }

  updatePlayer(player: Player): Observable<Player> {

    const useUrl: string = `${this.apiUrl}/${player.id}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })
    const dataToUpdate = {
      name: player.name,
      age: player.age,
      position: player.position,
      number: player.number
    };
    
    return this.http.patch<Player>(useUrl, dataToUpdate, {headers});
  }

  createPlayer(player: Player): Observable<Player> {

    const useUrl: string = `${this.apiUrl}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })
    const dataToCreate = {
      name: player.name,
      age: player.age,
      position: player.position,
      number: player.number
    };
    
    return this.http.post<Player>(useUrl, dataToCreate, {headers});
  }

  searchPlayer(query: string): Observable<Player[]> {
    const searchUrl = `${this.apiUrl}/search?query=${query}`;
    return this.http.get<Player[]>(searchUrl);
  }
}