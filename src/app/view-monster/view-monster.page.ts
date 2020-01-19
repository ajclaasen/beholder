import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { empty, Observable } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

import { IMonster } from '../interfaces/monster';

import { MonsterDataService } from '../services/monster-data.service';

@Component({
  selector: 'app-view-monster',
  templateUrl: './view-monster.page.html',
  styleUrls: ['./view-monster.page.scss'],
})
export class ViewMonsterPage implements OnInit {
  pageTitle: string = "";
  monster$: Observable<IMonster>;
  errorObject$ = null;

  constructor(
    private route: ActivatedRoute, 
    public monsterDataService: MonsterDataService
    ) { }

  ngOnInit() {
    this.monster$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        return this.monsterDataService.loadMonster(params.get('id'));
      }),
      catchError((error) => this.handleError(error))
    );
  }

  protected handleError(error) {
    console.error(error);
    this.errorObject$ = error;
    return empty();
  }
}
