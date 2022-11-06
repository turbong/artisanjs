import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'card-header-linear',
  templateUrl: './card-header-linear.component.html',
  styleUrls: ['./card-header-linear.component.scss'],
  host: {
    class: 'card-header-linear d-flex'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardHeaderLinearComponent { }
