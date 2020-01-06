import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IMonster } from './../interfaces/monster';

const monsterServer = "https://monstermaker.herokuapp.com/";

@Injectable({
  providedIn: 'root'
})
export class MonsterDataService {
  constructor(private http: HttpClient) {
  }

  loadMonsterIndex() {
    return this.http.get<IMonster[]>(`${monsterServer}monsters.json`);
  }

  loadMonster(monsterId: string) {
    return this.http.get<IMonster>(`${monsterServer}monsters/${monsterId}.json`);
  }
}
