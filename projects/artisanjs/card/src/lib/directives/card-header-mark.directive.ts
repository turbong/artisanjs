import { Directive } from '@angular/core';

@Directive({
  selector: 'card-header-mark, [card-header-mark], [artisanjsCardHeaderMark]',
  host: {
    class: 'card-header-subtitle-mark'
  }
})
export class CardHeaderMarkDirective { }
