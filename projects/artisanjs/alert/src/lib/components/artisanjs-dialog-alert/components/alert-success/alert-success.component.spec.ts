import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AlertSuccessComponent } from './alert-success.component';

describe('AlertSucessComponent', () => {
  let component: AlertSuccessComponent;
  let fixture: ComponentFixture<AlertSuccessComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AlertSuccessComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
