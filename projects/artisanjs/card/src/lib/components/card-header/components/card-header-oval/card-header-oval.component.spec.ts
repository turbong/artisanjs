import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CardHeaderOvalComponent } from './card-header-oval.component';

describe('CardHeaderOvalComponent', () => {
  let component: CardHeaderOvalComponent;
  let fixture: ComponentFixture<CardHeaderOvalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CardHeaderOvalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardHeaderOvalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
