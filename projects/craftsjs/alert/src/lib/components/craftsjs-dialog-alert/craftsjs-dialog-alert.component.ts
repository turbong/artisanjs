import {
  Component,
  ChangeDetectionStrategy,
  Inject,
  ViewEncapsulation,
  OnInit,
  Injector,
  InjectionToken,
  Type,
  ViewContainerRef,
  QueryList,
  ViewChildren,
  AfterViewInit,
  TemplateRef
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlertModel } from '../../models/alert.model';
import { alertComponents } from './components/components';
import { DynamicDirective } from '@craftsjs/core';

export const CRAFTSJS_ALERT_DATA = new InjectionToken<any>('CraftsjsAlertData');

@Component({
  selector: 'craftsjs-dialog-alert',
  templateUrl: './craftsjs-dialog-alert.component.html',
  styleUrls: ['./craftsjs-dialog-alert.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class CraftsjsDialogAlertComponent implements OnInit, AfterViewInit {

  @ViewChildren(DynamicDirective)
  appDynamic: QueryList<DynamicDirective>;

  constructor(
    public dialogRef: MatDialogRef<CraftsjsDialogAlertComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AlertModel,
  ) {
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.loadComponents();
  }

  private loadComponents() {
    const itemComponent = alertComponents.find(x => x.type === this.data.type);
    const component = itemComponent && itemComponent.component;
    this.resolveComponent(component, this.appDynamic.find(x => x.name === 'alert-icon').viewContainerRef);
    this.resolveComponent(this.data.customBody, this.appDynamic.find(x => x.name === 'alert-body').viewContainerRef);
    this.resolveComponent(this.data.customButtonComponent, this.appDynamic.find(x => x.name === 'alert-buttons').viewContainerRef);
  }

  private resolveComponent(component: Type<{}> | TemplateRef<{}>, viewContainerRef: ViewContainerRef) {
    if (!component) { return; }
    viewContainerRef.clear();
    if (component instanceof TemplateRef) {
      viewContainerRef.createEmbeddedView(component, { $implicit: this.data, dialogRef: this.dialogRef });
    } else {
      const injector = this.createInjector(viewContainerRef.injector);
      viewContainerRef.createComponent(component, {
        injector: injector
      })
    }
  }

  private createInjector(injector: Injector) {
    return Injector.create({
      providers: [{
        provide: CRAFTSJS_ALERT_DATA,
        useValue: this.data
      },
      {
        provide: MatDialogRef,
        useValue: this.dialogRef
      }],
      parent: injector
    })
  }

  buttonClick(result: string) {
    this.dialogRef.close({ data: this.data, result });
  }

}
