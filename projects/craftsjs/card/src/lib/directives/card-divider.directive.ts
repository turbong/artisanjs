import { Directive } from '@angular/core';

@Directive({
  selector: 'card-divider, [card-divider], [craftsjsCardDivider]',
  host: {
    class: 'card-divider'
  }
})
export class CardDividerDirective { }
