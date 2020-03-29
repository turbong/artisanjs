import { Directive } from '@angular/core';

@Directive({
  selector: 'craftsjs-card-body, [craftsjs-card-body], [craftsjsCardBody]',
  host: { class: 'card-body' }
})
export class CardBodyDirective { }
