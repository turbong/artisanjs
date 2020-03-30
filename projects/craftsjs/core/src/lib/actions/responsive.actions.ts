import { Action } from '@ngrx/store';

export enum ResponsiveActionTypes {
    ScreenChanged = '[Responsive] Screen changed'
}

export class ScreenChanged implements Action {
    readonly type = ResponsiveActionTypes.ScreenChanged;
    constructor(public payload: { width: number }) { }
}

export type ResponsiveActions = ScreenChanged;
