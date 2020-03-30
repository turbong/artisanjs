import { Action } from '@ngrx/store';
import { MenuModel } from '../models/menu.model';

export enum MenuActionTypes {
    MenusLoaded = '[Menu] Menus loaded',
    MenuMiniActivated = '[Menu] Menu mini activated',
    MenuOpened = '[Menu] Menu opened'
}

export class MenusLoaded implements Action {
    readonly type = MenuActionTypes.MenusLoaded;
    constructor(public payload: { menus: MenuModel[] }) { }
}

export class MenuMiniActivated implements Action {
    readonly type = MenuActionTypes.MenuMiniActivated;
}

export class MenuOpened implements Action {
    readonly type = MenuActionTypes.MenuOpened;
}

export type MenuActions = MenusLoaded | MenuMiniActivated | MenuOpened;
