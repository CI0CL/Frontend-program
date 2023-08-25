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
  getPlayer(): Observable<Player>{
    return this.http.get<Player>(this.apiUrl)
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

    // NOTE: Patch mapping DOES NOT work here: inform backend!
    return this.http.put<Player>(useUrl,
      dataToUpdate, {headers});
  }
}