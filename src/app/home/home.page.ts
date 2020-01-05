import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const monsterServer = "https://monstermaker.herokuapp.com/monsters.json";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  monsterArray: any;

  constructor(private http: HttpClient) {
    this.http.get(monsterServer)
      .subscribe((data: any) => {
        this.monsterArray = data;
      });
  }
}
