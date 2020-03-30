import { Component, Input, ChangeDetectionStrategy, ViewEncapsulation, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ResponsiveService } from '@craftsjs/core';
import { MenuModel } from '../../../../models/menu.model';
import { MenuOpened } from '../../../../actions/menu.actions';
import { MenuService } from '../../../../services/menu.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'shared-print-menu',
    templateUrl: './shared-print-menu.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./shared-print-menu.component.scss'],
    encapsulation: ViewEncapsulation.None,
    host: {
        class: 'menu-items'
    }
})
export class SharedPrintMenuComponent implements OnInit {
    @Input()
    menus: MenuModel[];

    @Input()
    isDetail: boolean;

    collapse$: Observable<boolean>;

    constructor(private readonly _store: Store<any>,
                private readonly responsiveService: ResponsiveService,
                private readonly _menuService: MenuService) { }


    ngOnInit(): void {
        this.collapse$ = this._menuService.collapseMenu$;
    }

    openCloseMenu() {
        const isMobile = this.responsiveService.isMobileSubject.getValue();
        isMobile && this._store.dispatch(new MenuOpened());
    }
}
