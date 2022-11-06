import { Injectable, ApplicationRef, Inject, Injector, ComponentFactoryResolver } from '@angular/core';
import { NotifierContainerService } from './notifier-container.service';
import { DOCUMENT } from '@angular/common';
import { DomPortalOutlet } from '@angular/cdk/portal';
import { NOTIFIER } from '../constants';

let nextUniqueId = 0;

@Injectable()
export class NotifierPortalService {

  private _appRef: ApplicationRef;

  constructor(
    private _notifierContainerService: NotifierContainerService,
    @Inject(DOCUMENT) private _document: any,
    private _injector: Injector,
    private _componentFactoryResolver: ComponentFactoryResolver
  ) { }

  create() {
    const pane = this._createPaneElement();
    const portal = this._createPortalOutlet(pane);
    return portal;
  }

  private _createPortalOutlet(pane: HTMLElement): DomPortalOutlet {
    if (!this._appRef) {
      this._appRef = this._injector.get<ApplicationRef>(ApplicationRef);
    }
    return new DomPortalOutlet(pane, this._componentFactoryResolver, this._appRef, this._injector);
  }

  private _createPaneElement(): HTMLElement {
    const pane = this._document.createElement('div');
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    pane.id = `${NOTIFIER + nextUniqueId++}`;
    this._notifierContainerService.getContainerElement().appendChild(pane);
    return pane;
  }

  get getLastUniqueId() {
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    return `${NOTIFIER + (nextUniqueId - 1)}`;
  }
}
