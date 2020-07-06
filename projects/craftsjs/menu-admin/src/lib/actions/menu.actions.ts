import { createAction, props } from '@ngrx/store';
import { MenuModel } from '../models/menu.model';

export enum MenuActionTypes {
    MenusLoaded = '[Menu] Menus loaded',
    MenuMiniActivated = '[Menu] Menu mini activated',
    MenuOpened = '[Menu] Menu opened'
}

export const menusLoaded = createAction(MenuActionTypes.MenusLoaded, props<{ payload: { menus: MenuModel[] } }>());

export const menuMiniActivated = createAction(MenuActionTypes.MenuMiniActivated);

export const menuOpened = createAction(MenuActionTypes.MenuOpened);
