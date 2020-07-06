import { NgModule, ModuleWithProviders } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '@craftsjs/core';
import { DialogAlertComponent } from './components/dialog-alert/dialog-alert.component';
import { AlertSuccessComponent } from './components/dialog-alert/components/alert-success/alert-success.component';
import { AlertInfoComponent } from './components/dialog-alert/components/alert-info/alert-info.component';
import { WarningComponent } from './components/dialog-alert/components/warning/warning.component';
import { ErrorComponent } from './components/dialog-alert/components/error/error.component';
import { AlertOkButtonComponent } from './components/dialog-alert/components/buttons/alert-ok-button/alert-ok-button.component';
import {
  AlertCancelButtonComponent
} from './components/dialog-alert/components/buttons/alert-cancel-button/alert-cancel-button.component';
import { AlertService } from './services/alert.service';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    MatButtonModule,
    CoreModule,
    MatDialogModule
  ],
  declarations: [
    DialogAlertComponent,
    AlertSuccessComponent,
    AlertInfoComponent,
    WarningComponent,
    ErrorComponent,
    AlertOkButtonComponent,
    AlertCancelButtonComponent
  ],
  exports: [
    DialogAlertComponent
  ],
  entryComponents: [
    DialogAlertComponent,
    AlertSuccessComponent,
    AlertInfoComponent,
    WarningComponent,
    ErrorComponent
  ]
})
export class AlertModule {
  static forRoot(): ModuleWithProviders<AlertModule> {
    return {
      ngModule: AlertModule,
      providers: [
        AlertService
      ]
    };
  }
}
