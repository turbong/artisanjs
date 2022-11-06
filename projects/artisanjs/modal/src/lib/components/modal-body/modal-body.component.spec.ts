import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ModalBodyComponent } from './modal-body.component';

describe('ModalBodyComponent', () => {
  let component: ModalBodyComponent;
  let fixture: ComponentFixture<ModalBodyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
