import { Directive } from '@angular/core';

@Directive({
  selector: 'card-divider, [card-divider], [artisanjsCardDivider]',
  host: {
    class: 'card-divider'
  }
})
export class CardDividerDirective { }
