import { Component, Input, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MenuMiniActivated, MenuOpened } from '../../actions/menu.actions';
import { MenuHeaderModel } from '../../models/menu-header.model';
import { Observable } from 'rxjs';
import { MenuService } from '../../services/menu.service';

@Component({
    selector: 'menu-header',
    templateUrl: './menu-header.component.html',
    host: {
        class: 'menu-tools d-flex justify-content-between align-items-center col-12'
    },
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuHeaderComponent implements OnInit {

    @Input()
    header: MenuHeaderModel;

    collapse$: Observable<boolean>;

    constructor(private readonly _store: Store<any>, private readonly _menuService: MenuService) { }

    ngOnInit(): void {
        this.collapse$ = this._menuService.collapseMenu$;
    }

    colapseMenu() {
        this._store.dispatch(new MenuMiniActivated());
    }

    closeMenu() {
        this._store.dispatch(new MenuOpened());
    }
}
