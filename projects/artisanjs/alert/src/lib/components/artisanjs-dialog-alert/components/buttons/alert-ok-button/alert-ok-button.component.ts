import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'addapptable-alert-ok-button',
  templateUrl: './alert-ok-button.component.html',
  styleUrls: ['./alert-ok-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertOkButtonComponent {
  @Output()
  click = new EventEmitter();
}
