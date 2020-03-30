import { Directive } from '@angular/core';

@Directive({
  selector: 'modal-header, [modal-header], [craftsjsModalHeader]',
  host: { class: 'modal-header' }
})
export class ModalHeaderDirective { }
