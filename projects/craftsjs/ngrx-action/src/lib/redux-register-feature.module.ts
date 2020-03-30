import { NgModule, Optional, Inject, Injector, InjectFlags } from '@angular/core';
import { ReducerManager, combineReducers } from '@ngrx/store';
import { FEATURE_STORE_TOKEN } from './redux-tokens';
import { createReducer } from './factory';

@NgModule()
export class ReduxRegisterFeatureModule {
    constructor(@Optional() @Inject(FEATURE_STORE_TOKEN) featureReducers: any, reducerFactory: ReducerManager, parentInjector: Injector
    ) {
        if (featureReducers) {
            featureReducers.forEach(featureReducer => {
                if (typeof featureReducer.key !== 'string') {
                    featureReducer.reducers = featureReducer.key;
                    featureReducer.key = undefined;
                }

                const mapped = {};
                // tslint:disable-next-line:forin
                for (const key in featureReducer.reducers) {
                    const klass = featureReducer.reducers[key];
                    const inst = parentInjector.get(klass, new klass(), InjectFlags.Default);
                    mapped[key] = createReducer(inst);
                }

                if (featureReducer.key) {
                    reducerFactory.addFeature({
                        reducers: mapped,
                        reducerFactory: <any>combineReducers,
                        key: featureReducer.key
                    });
                }
            });
        }
    }
}
