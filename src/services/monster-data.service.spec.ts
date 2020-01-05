import { TestBed } from '@angular/core/testing';

import { MonsterDataService } from './monster-data.service';

describe('MonsterDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MonsterDataService = TestBed.get(MonsterDataService);
    expect(service).toBeTruthy();
  });
});
