import { Directive } from '@angular/core';

@Directive({
  selector: 'craftsjs-card-footer, [craftsjs-card-footer], [craftsjsCardFooter]',
  host: { class: 'card-footer' }
})
export class CardFooterDirective { }
