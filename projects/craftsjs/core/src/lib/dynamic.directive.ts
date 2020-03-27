import { Directive, ViewContainerRef, Input } from '@angular/core';

@Directive({
    selector: '[craftsjsDynamic]'
})
export class DynamicDirective {

    @Input()
    name: string;

    constructor(public viewContainerRef: ViewContainerRef) { }

}
