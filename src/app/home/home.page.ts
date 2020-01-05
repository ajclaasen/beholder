import { Component } from '@angular/core';

import { MonsterDataService } from '../../services/monster-data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  monsterArray: any;

  constructor(public monsterDataService: MonsterDataService) {
  }

  ngOnInit(){
    this.monsterDataService.loadMonsterIndex().subscribe((data: any) => {
      this.monsterArray = data;
    });
  }
}
