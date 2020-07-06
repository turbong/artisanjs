import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectAllScreen } from '@craftsjs/core';
import { map, distinctUntilChanged, shareReplay } from 'rxjs/operators';
import { Observable, combineLatest } from 'rxjs';
import * as MenuActions from '../actions/menu.actions';
import { selectActiveMenuMini, selectMenuOpen } from '../selectors/menu.selector';

@Injectable({
    providedIn: 'root'
})
export class MenuService {

    activeMenuMini$: Observable<boolean>;

    activeMobile$: Observable<boolean>;

    collapseMenu$: Observable<boolean>;

    open$: Observable<boolean>;

    constructor(private readonly _store: Store<any>) {
    }

    init() {
        this.open$ = this._store.pipe(
            select(selectMenuOpen)
        );
        this.initMenuMini();
        this.initScreen();
        this.collapseMenu$ = combineLatest([
            this.activeMenuMini$,
            this.activeMobile$
        ]).pipe(
            map(([activeMenuMini, activeMobile]) => (activeMenuMini && !activeMobile)),
            distinctUntilChanged(),
            shareReplay()
        );
    }

    private initMenuMini() {
        this.activeMenuMini$ = this._store.pipe(
            select(selectActiveMenuMini),
            distinctUntilChanged()
        );
    }

    private initScreen() {
        this.activeMobile$ = combineLatest([
            this._store.pipe(
                select(selectAllScreen),
                map(x => x.xs || x.sm),
                distinctUntilChanged(),
                shareReplay()
            ),
            this.open$
        ]).pipe(
            map(([activeMobile, isOpen]) => {
                isOpen && !activeMobile && this._store.dispatch(MenuActions.menuOpened());
                return activeMobile;
            }),
            distinctUntilChanged(),
            shareReplay()
        );
    }
}
