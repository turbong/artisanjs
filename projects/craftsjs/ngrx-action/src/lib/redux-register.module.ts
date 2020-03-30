import { NgModule, ModuleWithProviders } from '@angular/core';
import { ReduxRegisterRootModule } from './redux-register-root.module';
import { STORE_TOKEN, FEATURE_STORE_TOKEN } from './redux-tokens';
import { ReduxRegisterFeatureModule } from './redux-register-feature.module';
import { StoreModule } from '@ngrx/store';

@NgModule({
    imports: [StoreModule]
})
export class ReduxRegisterModule {
    static forRoot(reducers: any): ModuleWithProviders {
        return {
            ngModule: ReduxRegisterRootModule,
            providers: [
                {
                    provide: STORE_TOKEN,
                    useValue: reducers
                }
            ]
        };
    }

    static forFeature(key: any, reducers?: any): ModuleWithProviders {
        return {
            ngModule: ReduxRegisterFeatureModule,
            providers: [
                {
                    provide: FEATURE_STORE_TOKEN,
                    useValue: { key, reducers },
                    multi: true
                }
            ]
        };
    }
}
