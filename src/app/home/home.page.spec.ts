import { By } from '@angular/platform-browser';
import { MonsterDataService } from './../services/monster-data.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { HttpErrorResponse } from '@angular/common/http';
import { of, never, throwError } from 'rxjs';

const thrownError = new HttpErrorResponse({
  status: 0,
  statusText: "Fake Error"
});

class MockMonsterDataService {
  loadMonsterIndex() {
    return of([
      { id: 0, name: "Alpha", hitPoints: 123 }, 
      { id: 1, name: "Beta", damage: 456 }
    ]);
  }
}

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePage ],
      imports: [
        IonicModule,
        RouterTestingModule
      ],
      providers: [{
        provide: MonsterDataService,
        useClass: MockMonsterDataService
      }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
  })

  describe('before the server has responded', () => {
    beforeEach(() => {
      spyOn(component.monsterDataService, "loadMonsterIndex")
        .and.returnValue(never());
      fixture.detectChanges();
    });

    it('should show that it is loading in the title', () => {
      let pageTitle = fixture.debugElement.query(By.css("ion-title"))
        .nativeElement.innerHTML;
      expect(pageTitle).toContain("Loading...");
    });
  });

  describe('when an error occurs during the HTTP request', () => {
    beforeEach(() => {
      spyOn(component.monsterDataService, "loadMonsterIndex")
        .and.returnValue(throwError(thrownError));
      fixture.detectChanges();
    });

    it('should show the error', () => {
      let pageTitle = fixture.nativeElement.querySelector("ion-title").innerHTML;
      let pageContent = fixture.nativeElement.querySelector("ion-content").innerHTML;

      expect(pageTitle).toContain("Fake Error");
      expect(pageContent).toContain("Http failure response");
      expect(pageContent).toContain("Fake Error");
    });
  });

  describe("when all goes well", () => {
    beforeEach(() => fixture.detectChanges());

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should show all monster names', () => {
      let pageContent = fixture.debugElement.query(By.css("ion-content"))
        .nativeElement.innerHTML;
      
      expect(pageContent).toContain("Alpha");
      expect(pageContent).toContain("Beta");
    });

    it("It should not show the monsters' stats", () => {
      let pageContent = fixture.debugElement.query(By.css("ion-content"))
        .nativeElement.innerHTML;
      
      expect(pageContent).not.toContain("123");
      expect(pageContent).not.toContain("456");
    });
  });
});
