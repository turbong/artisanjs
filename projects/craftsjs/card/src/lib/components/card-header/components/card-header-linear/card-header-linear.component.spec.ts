import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHeaderLinearComponent } from './card-header-linear.component';

describe('CardHeaderLinearComponent', () => {
  let component: CardHeaderLinearComponent;
  let fixture: ComponentFixture<CardHeaderLinearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardHeaderLinearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardHeaderLinearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
