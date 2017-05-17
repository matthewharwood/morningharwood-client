import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConspiracyTheoryComponent } from './conspiracy-theory.component';

describe('ConspiracyTheoryComponent', () => {
  let component: ConspiracyTheoryComponent;
  let fixture: ComponentFixture<ConspiracyTheoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConspiracyTheoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConspiracyTheoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
