import { Directive } from '@angular/core';

@Directive({
  selector: 'card-footer, [card-footer], [craftsjsCardFooter]',
  host: { class: 'card-footer' }
})
export class CardFooterDirective { }
