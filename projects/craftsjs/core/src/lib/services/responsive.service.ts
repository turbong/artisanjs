import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, fromEvent, BehaviorSubject } from 'rxjs';
import { distinctUntilChanged, startWith, tap, debounceTime, map } from 'rxjs/operators';
import * as ResponsiveActions from '../actions/responsive.actions';
import { selectAllScreen } from '../selectors/responsive.selector';
import { ScreenModel } from '../models/screen.model';

@Injectable()
export class ResponsiveService {

    resize$: Observable<number>;

    isMobileSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);

    isMobile$ = this.isMobileSubject.asObservable();

    constructor(private readonly _store: Store<any>) {
        this._listenChange();
        this.resize$ = fromEvent(window, 'resize')
            .pipe(
                debounceTime(100),
                map(this.getWindowWith),
                distinctUntilChanged(),
                startWith(window.innerWidth),
                tap(width => this._store.dispatch(ResponsiveActions.screenChanged({ payload: { width } }))),
            );
    }

    private _listenChange() {
        const screen$ = this._store.pipe(
            select(selectAllScreen)
        );
        screen$.subscribe(this._onScreenChange.bind(this));
    }

    private _onScreenChange(screenModel: ScreenModel) {
        this.isMobileSubject.next(screenModel.xs || screenModel.sm);
    }

    private getWindowWith() {
        return window.innerWidth;
    }
}
