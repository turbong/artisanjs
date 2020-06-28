import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertOkButtonComponent } from './alert-ok-button.component';

describe('AlertOkButtonComponent', () => {
  let component: AlertOkButtonComponent;
  let fixture: ComponentFixture<AlertOkButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertOkButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertOkButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
