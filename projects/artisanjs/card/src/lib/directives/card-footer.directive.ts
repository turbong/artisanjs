import { Directive } from '@angular/core';

@Directive({
  selector: 'card-footer, [card-footer], [artisanjsCardFooter]',
  host: { class: 'card-footer' }
})
export class CardFooterDirective { }
