import { AlertSucessComponent } from './alert-success/alert-success.component';
import { AlertEnum } from '../../../models/alert-enum.model';
import { AlertInfoComponent } from './alert-info/alert-info.component';
import { WarningComponent } from './warning/warning.component';
import { ErrorComponent } from './error/error.component';

export const alertComponents = [
    {
        type: AlertEnum.success,
        component: AlertSucessComponent
    },
    {
        type: AlertEnum.info,
        component: AlertInfoComponent
    },
    {
        type: AlertEnum.warning,
        component: WarningComponent
    },
    {
        type: AlertEnum.error,
        component: ErrorComponent
    }
];
