import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';


import { NoticiasPage } from './noticias.page';

describe('Tab2Page', () => {
  let component: NoticiasPage;
  let fixture: ComponentFixture<NoticiasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NoticiasPage],
      imports: [IonicModule.forRoot(), RouterModule]
    }).compileComponents();

    fixture = TestBed.createComponent(NoticiasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
