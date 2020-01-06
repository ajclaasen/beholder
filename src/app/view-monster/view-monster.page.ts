import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { throwError } from 'rxjs'

import { IMonster } from '../interfaces/monster';

import { MonsterDataService } from '../services/monster-data.service';

@Component({
  selector: 'app-view-monster',
  templateUrl: './view-monster.page.html',
  styleUrls: ['./view-monster.page.scss'],
})
export class ViewMonsterPage implements OnInit {

  monsterId: string = null;
  monsterData: IMonster;

  constructor(
    private activatedRoute: ActivatedRoute, 
    public monsterDataService: MonsterDataService
    ) { }

  ngOnInit() {
    this.monsterId = this.activatedRoute.snapshot.paramMap.get('monsterId');
    if(this.monsterId) {
      this.monsterDataService.loadMonster(this.monsterId).subscribe((data: IMonster) => {
        this.monsterData = data;
      });
    }
  }
}
