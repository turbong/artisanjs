import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'card-header',
  templateUrl: './card-header.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  inputs: ['color'],
  host: {
    class: 'd-flex flex-row flex-wrap card-header'
  }
})
export class CardHeaderComponent {
  @Input()
  classHeaderTitle: string;
}
