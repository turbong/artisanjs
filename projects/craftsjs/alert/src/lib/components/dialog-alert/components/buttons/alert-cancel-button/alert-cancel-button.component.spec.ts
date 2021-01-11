import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AlertCancelButtonComponent } from './alert-cancel-button.component';

describe('AlertCancelButtonComponent', () => {
  let component: AlertCancelButtonComponent;
  let fixture: ComponentFixture<AlertCancelButtonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertCancelButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertCancelButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
