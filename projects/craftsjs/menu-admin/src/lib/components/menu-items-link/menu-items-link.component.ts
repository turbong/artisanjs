import { Component, Input, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { MenuModel } from '../../models/menu.model';

@Component({
    selector: 'menu-items-link',
    templateUrl: './menu-items-link.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'menu-children-items'
    }
})
export class MenuItemsLinkComponent {
    @Input()
    menus: MenuModel[];
}
