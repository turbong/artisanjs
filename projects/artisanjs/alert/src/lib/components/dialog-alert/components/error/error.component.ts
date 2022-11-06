import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'alert-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
  host: {
    class: 'alert-icon alert-icon-error'
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorComponent { }
