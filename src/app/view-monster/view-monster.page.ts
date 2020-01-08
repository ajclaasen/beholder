import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { throwError } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { IMonster } from '../interfaces/monster';

import { MonsterDataService } from '../services/monster-data.service';

@Component({
  selector: 'app-view-monster',
  templateUrl: './view-monster.page.html',
  styleUrls: ['./view-monster.page.scss'],
})
export class ViewMonsterPage implements OnInit {
  pageTitle: string = "";
  monsterData: IMonster;

  constructor(
    private route: ActivatedRoute, 
    public monsterDataService: MonsterDataService
    ) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        return this.monsterDataService.loadMonster(params.get('id'));
      })
    ).subscribe((data: IMonster) => {
      this.monsterData = data;
    },
    (error: any) => {
      console.error(`error: ${JSON.stringify(error)}`);
      this.pageTitle = error.statusText;
    });
  }
}
