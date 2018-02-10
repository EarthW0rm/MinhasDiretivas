import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploContadorCaracteresComponent } from './exemplo-contador-caracteres.component';

describe('ExemploContadorCaracteresComponent', () => {
  let component: ExemploContadorCaracteresComponent;
  let fixture: ComponentFixture<ExemploContadorCaracteresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExemploContadorCaracteresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExemploContadorCaracteresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
