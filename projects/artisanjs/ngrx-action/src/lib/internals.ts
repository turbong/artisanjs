import { ActionCreator } from '@ngrx/store';

export const NGRX_ACTIONS_META = '__ngrx__actions__';

export interface StoreMetadata {
    initialState?: any;
    actions: ActionsMeta;
    effects: ActionsMeta;
}

export interface ActionMeta {
    action: ActionCreator;
    fn: string;
    type: string;
}

export interface ActionsMeta {
    [type: string]: ActionMeta;
}

export function ensureStoreMetadata(target: any): StoreMetadata {
    // see https://github.com/angular/angular/blob/master/packages/core/src/util/decorators.ts#L60
    // eslint-disable-next-line no-prototype-builtins
    if (!target.hasOwnProperty(NGRX_ACTIONS_META)) {
        const defaultMetadata: StoreMetadata = { actions: {}, effects: {} };
        Object.defineProperty(target, NGRX_ACTIONS_META, { value: defaultMetadata });
    }
    return target[NGRX_ACTIONS_META];
}
