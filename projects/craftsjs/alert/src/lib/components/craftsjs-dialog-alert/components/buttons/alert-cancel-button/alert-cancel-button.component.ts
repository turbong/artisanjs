import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'addapptable-alert-cancel-button',
  templateUrl: './alert-cancel-button.component.html',
  styleUrls: ['./alert-cancel-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertCancelButtonComponent {
  @Output()
  click = new EventEmitter();
}
