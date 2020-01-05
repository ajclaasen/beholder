import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const monsterServer = "https://monstermaker.herokuapp.com/";

@Injectable({
  providedIn: 'root'
})
export class MonsterDataService {

  constructor(private http: HttpClient) {
  }

  loadMonsterIndex() {
    return this.http.get(`${monsterServer}monsters.json`);
  }
}
