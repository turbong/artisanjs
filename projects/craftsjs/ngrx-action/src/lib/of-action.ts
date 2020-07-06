import { Action, ActionCreator } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { OperatorFunction } from 'rxjs';

export function ofAction<T extends Action>(allowedType: ActionCreator): OperatorFunction<Action, T>;
export function ofAction<T extends Action>(...allowedTypes: ActionCreator[]): OperatorFunction<Action, T>;
export function ofAction(...allowedTypes: ActionCreator[]): OperatorFunction<Action, Action> {
    const allowedMap = {};
    allowedTypes.forEach(klass => (allowedMap[klass.type] = true));
    return filter((action: Action) => {
        return allowedMap[action.type];
    });
}
