import { Store, Action } from '@craftsjs/ngrx-action';
import { MenuStoreModel } from '../models/menu.store.model';
import * as MenuActions from '../actions/menu.actions';


@Store<MenuStoreModel>({
    activeMenuMini: false,
    isOpen: false
})
export class MenuStore {

    @Action(MenuActions.menusLoaded)
    menusLoaded(state: MenuStoreModel, { payload: { menus } }) {
        return { ...state, loading: false, menus };
    }

    @Action(MenuActions.menuMiniActivated)
    menuMiniActivated(state: MenuStoreModel) {
        return { ...state, activeMenuMini: !state.activeMenuMini };
    }

    @Action(MenuActions.menuOpened)
    menuOpened(state: MenuStoreModel) {
        return { ...state, isOpen: !state.isOpen };
    }

}
