import { Directive } from '@angular/core';

@Directive({
  selector: 'modal-header, [modal-header], [artisanjsModalHeader]',
  host: { class: 'modal-header' }
})
export class ModalHeaderDirective { }
