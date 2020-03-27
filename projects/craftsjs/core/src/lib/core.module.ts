import { NgModule } from '@angular/core';
import { DynamicDirective } from './dynamic.directive';

@NgModule({
    declarations: [
        DynamicDirective
    ],
    exports: [
        DynamicDirective
    ]
})
export class CoreModule { }
