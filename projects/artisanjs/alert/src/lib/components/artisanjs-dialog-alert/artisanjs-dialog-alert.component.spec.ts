import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { artisanjsDialogAlertComponent } from './artisanjs-dialog-alert.component';

describe('CraftjsDialogAlertComponent', () => {
  let component: artisanjsDialogAlertComponent;
  let fixture: ComponentFixture<artisanjsDialogAlertComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [artisanjsDialogAlertComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(artisanjsDialogAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
