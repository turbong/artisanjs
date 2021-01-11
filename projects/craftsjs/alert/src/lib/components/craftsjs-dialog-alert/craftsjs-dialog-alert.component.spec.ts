import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CraftsjsDialogAlertComponent } from './craftsjs-dialog-alert.component';

describe('CraftjsDialogAlertComponent', () => {
  let component: CraftsjsDialogAlertComponent;
  let fixture: ComponentFixture<CraftsjsDialogAlertComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CraftsjsDialogAlertComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CraftsjsDialogAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
