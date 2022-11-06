import { Directive } from '@angular/core';

@Directive({
  selector: 'modal-footer, [modal-footer], [artisanjsModalFooter]',
  host: { class: 'modal-footer' }
})
export class ModalFooterDirective { }
