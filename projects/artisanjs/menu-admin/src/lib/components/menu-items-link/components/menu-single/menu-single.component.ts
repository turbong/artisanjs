import { Component, ChangeDetectionStrategy, Input, OnInit } from '@angular/core';
import { MenuModel } from '../../../../models/menu.model';
import { Observable } from 'rxjs';
import { MenuService } from '../../../../services/menu.service';

@Component({
    selector: 'menu-single',
    templateUrl: './menu-single.component.html',
    styleUrls: ['./menu-single.component.scss'],
    host: {
        class: 'd-flex'
    },
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuSingleComponent implements OnInit {
    @Input()
    menu: MenuModel;

    collapse$: Observable<boolean>;

    constructor(private readonly _menuService: MenuService) { }

    ngOnInit(): void {
        this.collapse$ = this._menuService.collapseMenu$;
    }
}
