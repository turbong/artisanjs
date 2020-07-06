import { Directive } from '@angular/core';

@Directive({
  selector: 'card-header-subtitle, [card-header-subtitle], [craftsjsCardHeaderSubtitle]',
  host: {
    class: 'card-header-subtitle-h3'
  }
})
export class CardHeaderSubtitleDirective { }
