import { Component, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import { mixinColor } from '../../../../mixins/color';

export class CardHeaderOvalBase {
  constructor(public _elementRef: ElementRef) { }
}

export const _CardHeaderOvalMixinBase:
  typeof CardHeaderOvalBase =
  mixinColor(CardHeaderOvalBase);

@Component({
  selector: 'card-header-oval',
  templateUrl: './card-header-oval.component.html',
  styleUrls: ['./card-header-oval.component.scss'],
  host: {
    class: 'card-header-oval d-flex'
  },
  inputs: ['color'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardHeaderOvalComponent extends _CardHeaderOvalMixinBase {

  constructor(_elementRef: ElementRef) {
    super(_elementRef);
  }

}
