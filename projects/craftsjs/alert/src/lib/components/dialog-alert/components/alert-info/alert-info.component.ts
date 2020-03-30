import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'alert-info',
  templateUrl: './alert-info.component.html',
  styleUrls: ['./alert-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'alert-icon alert-icon-info'
  }
})
export class AlertInfoComponent { }
