import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AlertOkButtonComponent } from './alert-ok-button.component';

describe('AlertOkButtonComponent', () => {
  let component: AlertOkButtonComponent;
  let fixture: ComponentFixture<AlertOkButtonComponent>;

  beforeEach(waitForAsync(() => {
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
