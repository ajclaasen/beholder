import { Component } from '@angular/core';

import { IMonster } from './../interfaces/monster';
import { MonsterDataService } from '../services/monster-data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  monsterArray: IMonster[];

  constructor(public monsterDataService: MonsterDataService) { }

  ngOnInit(){
    this.monsterDataService.loadMonsterIndex().subscribe((data: IMonster[]) => {
      this.monsterArray = data;
    });
  }
}
