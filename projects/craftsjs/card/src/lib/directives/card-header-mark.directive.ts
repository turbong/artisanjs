import { Directive } from '@angular/core';

@Directive({
  selector: 'craftsjs-card-header-mark, [craftsjs-card-header-mark], [craftsjsCardHeaderMark]',
  host: {
    class: 'card-header-subtitle-mark'
  }
})
export class CardHeaderMarkDirective { }
