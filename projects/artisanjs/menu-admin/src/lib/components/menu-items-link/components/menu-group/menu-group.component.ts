import { Component, Input, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { MenuModel } from '../../../../models/menu.model';
import { MenuService } from '../../../../services/menu.service';

@Component({
    selector: 'menu-group',
    templateUrl: './menu-group.component.html',
    styleUrls: ['./menu-group.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuGroupComponent implements OnInit {

    isOpenSub = new BehaviorSubject<boolean>(false);

    isOpen$ = this.isOpenSub.asObservable();

    menuGroup: MenuModel;

    collapse$: Observable<boolean>;

    @Input()
    set menu(menu: MenuModel) {
        this.menuGroup = menu;
        if (this.menuGroup.children) {
            const manyActive = this.menuGroup.children.map(x => this._router.isActive(x.url, x.exact));
            if (manyActive.find(x => x === true)) {
                this.isOpenSub.next(true);
            }
        }
    }

    constructor(private _router: Router, private readonly _menuService: MenuService) { }

    ngOnInit(): void {
        this.collapse$ = this._menuService.collapseMenu$;
    }

    openAndClose() {
        this.isOpenSub.next(!this.isOpenSub.getValue());
    }
}
