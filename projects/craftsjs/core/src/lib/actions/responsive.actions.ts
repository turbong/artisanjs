import { Action, createAction, props } from '@ngrx/store';

export enum ResponsiveActionTypes {
    ScreenChanged = '[Responsive] Screen changed'
}

export const screenChanged = createAction(ResponsiveActionTypes.ScreenChanged, props<{ payload: { width: number } }>());

