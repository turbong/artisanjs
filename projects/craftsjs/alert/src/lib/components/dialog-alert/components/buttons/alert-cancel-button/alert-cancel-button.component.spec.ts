import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertCancelButtonComponent } from './alert-cancel-button.component';

describe('AlertCancelButtonComponent', () => {
  let component: AlertCancelButtonComponent;
  let fixture: ComponentFixture<AlertCancelButtonComponent>;

  beforeEach(async(() => {
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
