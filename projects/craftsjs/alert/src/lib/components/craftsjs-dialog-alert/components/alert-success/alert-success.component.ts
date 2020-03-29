import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'craftsjs-alert-success',
  templateUrl: './alert-success.component.html',
  styleUrls: ['./alert-success.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'alert-icon alert-icon-success'
  }
})
export class AlertSuccessComponent { }
