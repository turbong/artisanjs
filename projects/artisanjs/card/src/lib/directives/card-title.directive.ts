import { Directive } from '@angular/core';

@Directive({
  selector: 'card-title, [card-title], [artisanjsCardTitle]',
  host: { class: 'card-header-title' }
})
export class CardTitleDirective { }
