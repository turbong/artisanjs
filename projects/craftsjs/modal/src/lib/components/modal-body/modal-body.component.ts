import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'modal-body, [modal-body], [craftsjsModalBody]',
  templateUrl: './modal-body.component.html',
  styleUrls: ['./modal-body.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'modal-body'
  },
  encapsulation: ViewEncapsulation.None
})
export class ModalBodyComponent { }
