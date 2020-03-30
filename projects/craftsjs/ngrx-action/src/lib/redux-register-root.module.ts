import { NgModule, Injector, Inject, Optional, InjectFlags } from '@angular/core';
import { ReducerManager } from '@ngrx/store';
import { STORE_TOKEN } from './redux-tokens';
import { createReducer } from './factory';

@NgModule()
export class ReduxRegisterRootModule {
    constructor(@Optional() @Inject(STORE_TOKEN) reducers: any, reducerFactory: ReducerManager, parentInjector: Injector) {
        if (reducers) {
            // tslint:disable-next-line:forin
            for (const key in reducers) {
                const klass = reducers[key];
                const inst = parentInjector.get(klass, new klass(), InjectFlags.Default);
                reducerFactory.addReducer(key, createReducer(inst));
            }
        }
    }
}
