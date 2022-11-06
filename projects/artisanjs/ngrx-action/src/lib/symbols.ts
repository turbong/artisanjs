import { Action } from '@ngrx/store';

export interface ActionType<T extends Action = Action> { new(...args: any[]): T; }
