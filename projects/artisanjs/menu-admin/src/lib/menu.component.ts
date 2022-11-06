import {
  Component,
  OnInit,
  HostListener,
  OnDestroy,
  HostBinding,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  ViewEncapsulation
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { tap, delay } from 'rxjs/operators';
import * as MenuActions from './actions/menu.actions';
import { MenuService } from './services/menu.service';

@Component({
  selector: 'artisanjs-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'principal-menu d-flex flex-column flex-wrap align-content-start'
  }
})
export class MenuComponent implements OnInit, OnDestroy {

  open$: Observable<boolean>;

  activeMenuMini$: Observable<boolean>;

  activeMobile = false;

  subs: Array<Subscription> = [];

  collapseMenu$: Observable<boolean>;

  @HostBinding('class.menu-overlay')
  isOpen = false;

  @HostBinding('class.menu-mini-active')
  collapse = false;

  constructor(private readonly _store: Store<any>,
              private readonly _menuService: MenuService,
              private readonly _cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    this._menuService.init();
    this.open$ = this._menuService.open$.pipe(
      tap(x => {
        this.isOpen = x;
        return x;
      })
    );
    this.activeMenuMini$ = this._menuService.collapseMenu$;
    this.collapseMenu$ = this.activeMenuMini$.pipe(
      delay(500)
    );
    this.subs.push(this._menuService.collapseMenu$.subscribe(x => { this.collapse = x; this._cdr.detectChanges(); }));
    this.subs.push(this._menuService.activeMobile$.subscribe(x => { this.activeMobile = x; this._cdr.detectChanges(); }));
  }

  @HostListener('click')
  closeMenu() {
    if (this.isOpen && this.activeMobile) {
      this._store.dispatch(MenuActions.menuOpened());
    }
  }

  ngOnDestroy(): void {
    this.subs.forEach(x => x.unsubscribe());
  }
}
