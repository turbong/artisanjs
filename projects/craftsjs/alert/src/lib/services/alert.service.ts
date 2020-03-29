import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlertModel } from '../models/alert.model';
import { AlertEnum } from '../models/alert-enum.model';
import { CraftsjsDialogAlertComponent } from '../components/craftsjs-dialog-alert/craftsjs-dialog-alert.component';

@Injectable()
export class AlertService {

  constructor(private _dialog: MatDialog) { }

  showSimple(title: string, message: string) {
    return this._open({
      title,
      text: message
    } as AlertModel);
  }

  showSuccess(title: string, message: string) {
    return this._open({
      title,
      text: message,
      type: AlertEnum.success
    });
  }

  showError(title: string, message: string) {
    return this._open({
      title,
      text: message,
      type: AlertEnum.error
    });
  }

  showInfo(title: string, message: string) {
    return this._open({
      title,
      text: message,
      type: AlertEnum.info
    });
  }

  showWarning(title: string, message: string) {
    return this._open({
      title,
      text: message,
      type: AlertEnum.warning
    });
  }

  showConfirmation(title: string, message: string) {
    return this._open({
      title,
      text: message,
      type: AlertEnum.warning,
      showCancelButton: true
    });
  }

  private _open(alertModel: AlertModel) {
    return this._dialog.open(CraftsjsDialogAlertComponent, {
      width: '500px',
      data: alertModel
    });
  }
}
