import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { MonsterDataService } from './monster-data.service';

import { IMonster } from './../interfaces/monster';

const monsterServer = "https://monstermaker.herokuapp.com/"

describe('MonsterDataService', () => {
  let monsterDataService: MonsterDataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MonsterDataService]
    });
    monsterDataService = TestBed.get(MonsterDataService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    const service: MonsterDataService = TestBed.get(MonsterDataService);
    expect(service).toBeTruthy();
  });

  describe('.loadMonsterIndex', () => {
    const mockMonsters: IMonster[] = [
      { id: 1, name: "Alpha" },
      { id: 2, name: "Beta" }
    ];
    
    it('should load an array of monsters', () => {
      monsterDataService.loadMonsterIndex().subscribe(monsters => {
        expect(monsters.length).toBe(2);
        expect(monsters).toEqual(mockMonsters);
      });

      const mockReq = httpMock.expectOne(`${monsterServer}monsters.json`);

      mockReq.flush(mockMonsters);
    });
  });

  describe('.loadMonster', () => {
    const mockMonster: IMonster = { id: 1, name: "Alpha" };

    it('should load a single monster', () => {
      monsterDataService.loadMonster("1").subscribe(monster => {
        expect(monster).toEqual(mockMonster);
      });

      const mockReq = httpMock.expectOne(`${monsterServer}monsters/1.json`);

      mockReq.flush(mockMonster);
    });
  });
});
