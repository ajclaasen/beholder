import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { MonsterDataService } from './monster-data.service';

import { IMonster } from './../interfaces/monster';

const monsterServer = "https://monstermaker.herokuapp.com/"

describe('MonsterDataService', () => {
  let httpController: HttpTestingController;
  let monsterDataService: MonsterDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MonsterDataService]
    });

    httpController = TestBed.get(HttpTestingController);
    monsterDataService = TestBed.get(MonsterDataService);
  });

  afterEach(() => {
    httpController.verify();
  });

  it('should be created', () => {
    const service: MonsterDataService = TestBed.get(MonsterDataService);
    expect(service).toBeTruthy();
  });

  describe('.loadMonsterIndex', () => {
    const monstersData: IMonster[] = [
      { id: 1, name: "Alpha" },
      { id: 2, name: "Beta" }
    ];
    
    it('should load an array of monsters', () => {
      monsterDataService.loadMonsterIndex().subscribe(data => {
        expect(data.length).toBe(2);
        expect(data).toEqual(monstersData);
      });

      const mockReq = httpController.expectOne(`${monsterServer}monsters.json`);
      mockReq.flush(monstersData);
    });
  });

  describe('.loadMonster', () => {
    const monsterData: IMonster = { id: 1, name: "Alpha" };

    it('should load a single monster', () => {
      monsterDataService.loadMonster("1").subscribe(data => {
        expect(data).toEqual(monsterData);
      });

      const mockReq = httpController.expectOne(`${monsterServer}monsters/1.json`);

      mockReq.flush(monsterData);
    });
  });
});
