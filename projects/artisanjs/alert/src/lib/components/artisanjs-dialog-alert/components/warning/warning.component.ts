import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'addapptable-alert-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.scss'],
  host: {
    class: 'alert-icon alert-icon-warning '
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class WarningComponent { }
