import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalComponent } from './modal.component';
import { ModalHeaderDirective } from './directives/modal-header.directive';
import { ModalFooterDirective } from './directives/modal-footer.directive';
import { ModalBodyComponent } from './components/modal-body/modal-body.component';
import { PerfectScrollbarModule } from '@artisanjs/perfect-scrollbar';
import { ModalConfig } from './models/modal-config.model';
import { ModalService } from './services/modal.service';
import { artisanjs_MODAL_CONFIG } from './tokens';

@NgModule({
  declarations: [
    ModalComponent,
    ModalHeaderDirective,
    ModalFooterDirective,
    ModalBodyComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    PerfectScrollbarModule,
  ],
  exports: [
    ModalComponent,
    ModalBodyComponent,
    ModalHeaderDirective,
    ModalFooterDirective
  ],
  providers: [
    ModalService
  ]
})
export class ModalModule {
  static forRoot(config: ModalConfig = { width: '800px' }): ModuleWithProviders<ModalModule> {
    return {
      ngModule: ModalModule,
      providers: [
        { provide: artisanjs_MODAL_CONFIG, useValue: config }
      ]
    };
  }
}
