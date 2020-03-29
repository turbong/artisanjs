import { Directive } from '@angular/core';

@Directive({
  selector: 'craftsjs-card-header-subtitle, [craftsjs-card-header-subtitle], [craftsjsCardHeaderSubtitle]',
  host: {
    class: 'card-header-subtitle-h3'
  }
})
export class CardHeaderSubtitleDirective { }
