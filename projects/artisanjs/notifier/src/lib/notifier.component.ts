import {
  Component,
  ChangeDetectionStrategy,
  EventEmitter,
  AfterViewInit,
  HostListener,
  OnDestroy,
  Inject,
  ViewEncapsulation,
  Injector,
  TemplateRef,
  ViewContainerRef,
  ViewChild,
  OnInit
} from '@angular/core';
import { notifierAnimation } from './animations/notifier.animation';
import { AnimationEvent } from '@angular/animations';
import { interval, Subject } from 'rxjs';
import { take, tap, takeUntil } from 'rxjs/operators';
import { ADDAPPTABLE_CONFIGURATION_NOTIFIER_DATA, ADDAPPTABLE_NOTIFIER_DATA } from './tokens';
import { NotifierConfiguration } from './models/notifier-configuration.model';
import { Notifier } from './models/notifier.model';
import { ComponentType } from '@angular/cdk/portal';
import { DynamicDirective } from '@artisanjs/core';
import { NotifierPositionType } from './models/notifier-position-enum.model';

@Component({
  selector: 'addapptable-notifier',
  templateUrl: './notifier.component.html',
  styleUrls: ['./notifier.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
  animations: [notifierAnimation.notifierAnimator],
  encapsulation: ViewEncapsulation.None
})
export class NotifierComponent implements OnInit, AfterViewInit, OnDestroy {

  _id: string;

  _state: 'slideInUp' | 'exit' | 'slideInDown' = 'slideInUp';

  _close = new EventEmitter();

  _animationStateChanged = new EventEmitter<AnimationEvent>();

  _style = {};

  subject = new Subject<void>();

  seconds = interval(5000);

  configuration: NotifierConfiguration = {
    position: NotifierPositionType.bottomRight,
    timeout: 5000,
    classIcon: 'material-icons',
    iconValue: 'notifications'
  };

  @ViewChild(DynamicDirective, { static: true })
  appDynamic: DynamicDirective;

  constructor(
    @Inject(ADDAPPTABLE_CONFIGURATION_NOTIFIER_DATA) configuration: NotifierConfiguration,
    @Inject(ADDAPPTABLE_NOTIFIER_DATA) public data: Notifier,
  ) {
    this.configuration = Object.assign({
      position: NotifierPositionType.bottomRight,
      timeout: 5000,
      classIcon: 'material-icons',
      iconValue: 'notifications'
    }, configuration);
    this.seconds = interval(this.configuration.timeout);
  }

  ngOnInit(): void {
    if (this.data.templateOrComponent) {
      this.resolveComponent(this.data.templateOrComponent, this.appDynamic.viewContainerRef);
    }
  }

  ngAfterViewInit(): void {
    this._timeOut();
  }

  @HostListener('mouseover') onMouseOver() {
    this.subject.next();
    this.subject.complete();
  }


  @HostListener('mouseleave') onMouseLeave() {
    this.subject = new Subject<void>();
    this._timeOut();
  }

  private _timeOut() {
    this.seconds.pipe(
      takeUntil(this.subject),
      take(1),
      tap(() => this.close())
    ).subscribe();
  }

  close() {
    this._close.emit();
  }

  startExitAnimation(): void {
    this._state = 'exit';
  }

  private resolveComponent(component: ComponentType<any> | TemplateRef<any>, viewContainerRef: ViewContainerRef) {
    if (!component) { return; }
    viewContainerRef.clear();
    if (component instanceof TemplateRef) {
      viewContainerRef.createEmbeddedView(component, { $implicit: this.data });
    } else {
      const injector = this.createInjector(viewContainerRef.injector);
      viewContainerRef.createComponent(component,{
        injector
      });
    }
  }

  private createInjector(injector: Injector) {
    return Injector.create({
      providers: [{
        provide: ADDAPPTABLE_NOTIFIER_DATA,
        useValue: this.data
      }],
      parent: injector
    })
  }

  ngOnDestroy(): void {
    this.subject.next();
    this.subject.complete();
  }
}
