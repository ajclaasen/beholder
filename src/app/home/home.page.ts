import { Component } from '@angular/core';

import { IMonster } from './../interfaces/monster';
import { MonsterDataService } from '../services/monster-data.service';
import { Observable, empty } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  monsters$: Observable<IMonster[]>;
  errorObject$ = null;

  constructor(public monsterDataService: MonsterDataService) { }

  ngOnInit(){
    this.monsters$ = this.monsterDataService.loadMonsterIndex()
      .pipe(catchError((error) => this.handleError(error)));
  }

  protected handleError(error) {
    console.error(error);
    this.errorObject$ = error;
    return empty();
  }
}
