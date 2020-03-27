import { Injectable, TemplateRef, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { ComponentType, PortalInjector } from '@angular/cdk/portal';

@Injectable({
    providedIn: 'root'
})
export class ResolveComponent {

    constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

    createEmbeddedView(template: TemplateRef<{}>, context: any, viewContainerRef: ViewContainerRef) {
        if (!template) { return; }
        viewContainerRef.clear();
        viewContainerRef.createEmbeddedView(template, context);
    }

    createComponent<T = any>(
        component: ComponentType<T>,
        viewContainerRef: ViewContainerRef,
        injectionTokens: WeakMap<any, any>
    ) {
        if (!component) { return; }
        viewContainerRef.clear();
        const componentFactory = component && this.componentFactoryResolver.resolveComponentFactory(component);
        const injector = new PortalInjector(viewContainerRef.injector, injectionTokens);
        viewContainerRef.createComponent(componentFactory, null, injector);
    }
}
