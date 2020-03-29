import { Component, Input, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { MenuUserModel } from '../../models/menu-user.model';
import { MenuService } from '../../services/menu.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'craftsjs-menu-user',
    templateUrl: './menu-user.component.html',
    styleUrls: ['./menu-user.component.scss'],
    host: {
        class: 'menu-user d-flex flex-column align-items-center'
    },
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuUserComponent implements OnInit {

    @Input()
    user: MenuUserModel;

    collapse$: Observable<boolean>;

    constructor(private readonly _menuService: MenuService) {

    }

    ngOnInit(): void {
        this.collapse$ = this._menuService.collapseMenu$;
    }

}
