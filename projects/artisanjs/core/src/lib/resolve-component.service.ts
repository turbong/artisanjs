import { Injectable, Injector, TemplateRef, ViewContainerRef } from '@angular/core';
import { ComponentType } from '@angular/cdk/portal';

@Injectable({
  providedIn: 'root'
})
export class ResolveComponent {

  constructor() { }

  createEmbeddedView(template: TemplateRef<any>, context: any, viewContainerRef: ViewContainerRef) {
    if (!template) { return; }
    viewContainerRef.clear();
    viewContainerRef.createEmbeddedView(template, context);
  }

  createComponent<T = any>(
    component: ComponentType<T>,
    viewContainerRef: ViewContainerRef,
    injector?: Injector
  ) {
    if (!component) { return; }
    viewContainerRef.clear();
    viewContainerRef.createComponent(component, {
      injector
    });
  }
}
