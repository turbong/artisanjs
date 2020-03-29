import { Directive } from '@angular/core';

@Directive({
  selector: 'craftsjs-card-divider, [craftsjs-card-divider], [craftsjsCardDivider]',
  host: {
    class: 'card-divider'
  }
})
export class CardDividerDirective { }
