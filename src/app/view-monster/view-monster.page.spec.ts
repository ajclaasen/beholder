import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { By } from '@angular/platform-browser';
import { of, throwError } from 'rxjs';

import { MonsterDataService } from './../services/monster-data.service';
import { ViewMonsterPage } from './view-monster.page';
import { ActivatedRoute } from '@angular/router';

class MockMonsterDataService {
  loadMonster(id: number) {
    if (id != 1) { 
      return throwError({status: 0, statusText: "Unknown Error"}); 
    }
    return of({ id: id, name: "Alpha" });
  }
}

describe('ViewMonsterPage', () => {
  let component: ViewMonsterPage;
  let fixture: ComponentFixture<ViewMonsterPage>;

  let idParam: number;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMonsterPage ],
      imports: [IonicModule.forRoot()],
      providers: [
        { 
          provide: ActivatedRoute, 
          useValue: { paramMap: of({get: () => idParam}) } 
        },
        { 
          provide: MonsterDataService, 
          useClass: MockMonsterDataService 
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewMonsterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when a monster with the specified id is not found', () => {
    beforeAll(() => idParam = -1);

    it('should show the error text as the page title', () => {
      let pageTitle = fixture.debugElement.query(By.css("ion-title")).nativeElement.innerHTML;
      expect(pageTitle).toBe("Unknown Error", 'title');
    });
  });

  describe('when a monster with the specified ID is found', () => {
    beforeAll(() => idParam = 1);

    it('should show the monster\'s name as the page title', () => {
      let pageTitle = fixture.debugElement.query(By.css("ion-title")).nativeElement.innerHTML;
      expect(pageTitle).toBe("Alpha", 'title');
    });

    xit('should show the monster\'s hit points and damage', () => {
      // TODO
    });
  });
});
