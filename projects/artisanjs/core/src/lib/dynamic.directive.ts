import { Directive, ViewContainerRef, Input } from '@angular/core';

@Directive({
    selector: '[artisanjsDynamic]'
})
export class DynamicDirective {

    @Input()
    name: string;

    constructor(public viewContainerRef: ViewContainerRef) { }

}
