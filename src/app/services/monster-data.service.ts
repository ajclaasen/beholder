import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IMonster } from './../interfaces/monster';
import { Observable } from 'rxjs';

const monsterServer = "https://monstermaker.herokuapp.com/";

@Injectable({
  providedIn: 'root'
})
export class MonsterDataService {
  constructor(private http: HttpClient) {
  }

  loadMonsterIndex(): Observable<IMonster[]> {
    return this.http.get<IMonster[]>(`${monsterServer}monsters.json`);
  }

  loadMonster(monsterId: string): Observable<IMonster> {
    return this.http.get<IMonster>(`${monsterServer}monsters/${monsterId}.json`);
  }
}
