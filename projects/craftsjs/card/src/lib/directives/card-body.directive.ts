import { Directive } from '@angular/core';

@Directive({
  selector: 'card-body, [card-body], [craftsjsCardBody]',
  host: { class: 'card-body' }
})
export class CardBodyDirective { }
