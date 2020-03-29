import { Directive } from '@angular/core';

@Directive({
  selector: 'craftsjs-card-title, [craftsjs-card-title], [craftsjsCardTitle]',
  host: { class: 'card-header-title' }
})
export class CardTitleDirective { }
