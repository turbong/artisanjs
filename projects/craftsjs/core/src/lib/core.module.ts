import { NgModule } from '@angular/core';
import { ReduxRegisterModule } from '@craftsjs/ngrx-action';
import { DynamicDirective } from './dynamic.directive';
import { ResponsiveStore } from './stores/responsive.store';
import { ResponsiveService } from './services/responsive.service';
@NgModule({
    imports: [
        ReduxRegisterModule.forFeature('responsive', { responsive: ResponsiveStore }),
    ],
    declarations: [
        DynamicDirective
    ],
    exports: [
        DynamicDirective
    ],
    providers: [
        ResponsiveService
    ]
})
export class CoreModule { }
