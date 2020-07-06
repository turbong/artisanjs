import { Action, ActionCreator } from '@ngrx/store';
import { NGRX_ACTIONS_META, StoreMetadata } from './internals';

export function createReducer<TState = any>(
    store:
        | {
            // tslint:disable-next-line:callable-types
            new(...args: any[]): any;
        }
        | any
): (state: TState, action: Action | any) => TState {
    const isInstance = !store.prototype;
    const klass = isInstance ? store.constructor : store;

    if (!klass.hasOwnProperty(NGRX_ACTIONS_META)) {
        throw new Error('A reducer can be created from a @Store decorated class only.');
    }

    const instance = isInstance ? store : new store();
    const { initialState, actions } = klass[NGRX_ACTIONS_META] as StoreMetadata;

    return (state: any = initialState, action: ActionCreator) => {
        const actionMeta = actions[action.type];
        if (actionMeta) {
            const result = instance[actionMeta.fn](state, action);
            if (result === undefined) {
                if (Array.isArray(state)) {
                    return [...state];
                } else {
                    return { ...state };
                }
            }
            state = result;
        }
        return state;
    };
}
