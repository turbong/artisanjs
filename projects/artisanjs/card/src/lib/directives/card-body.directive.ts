import { Directive } from '@angular/core';

@Directive({
  selector: 'card-body, [card-body], [artisanjsCardBody]',
  host: { class: 'card-body' }
})
export class CardBodyDirective { }
