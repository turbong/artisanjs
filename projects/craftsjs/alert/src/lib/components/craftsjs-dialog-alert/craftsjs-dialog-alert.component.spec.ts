import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CraftsjsDialogAlertComponent } from './craftsjs-dialog-alert.component';

describe('CraftjsDialogAlertComponent', () => {
  let component: CraftsjsDialogAlertComponent;
  let fixture: ComponentFixture<CraftsjsDialogAlertComponent>;

  beforeEach(async(() => {
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
