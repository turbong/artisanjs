import { ensureStoreMetadata } from './internals';

// eslint-disable-next-line @typescript-eslint/ban-types
export function Store<TState>(initialState?: TState): (target: Function) => void;
// eslint-disable-next-line @typescript-eslint/ban-types
export function Store(initialState?: any): (target: Function) => void;
export function Store(initialState: any = {}) {
    // eslint-disable-next-line @typescript-eslint/ban-types
    return function (target: Function) {
        const meta = ensureStoreMetadata(target);
        meta.initialState = initialState;
    };
}
