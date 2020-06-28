import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { MenuOpened } from '../../actions/menu.actions';

@Component({
    selector: 'craftsjs-collapse-button-mobile',
    templateUrl: './collapse-button-mobile.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'd-flex d-md-none justify-content-center'
    }
})
export class CollapseButtonMobileComponent {

    constructor(private readonly _store: Store<any>) { }

    openMenu() {
        this._store.dispatch(new MenuOpened());
    }
}
