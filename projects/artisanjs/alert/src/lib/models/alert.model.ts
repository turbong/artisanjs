import { AlertEnum } from './alert-enum.model';
import { Type, TemplateRef } from '@angular/core';

export interface AlertModel {
    type: AlertEnum;
    title?: string;
    text?: string;
    customData?: any;
    hiddenButtons?: boolean;
    customButtonComponent?: Type<any> | TemplateRef<any>;
    customBody?: Type<any> | TemplateRef<any>;
    showCancelButton?: boolean;
}
