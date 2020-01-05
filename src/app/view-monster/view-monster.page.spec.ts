import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewMonsterPage } from './view-monster.page';

describe('ViewMonsterPage', () => {
  let component: ViewMonsterPage;
  let fixture: ComponentFixture<ViewMonsterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMonsterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewMonsterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
