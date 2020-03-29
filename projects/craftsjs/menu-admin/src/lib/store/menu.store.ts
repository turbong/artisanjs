import { Store, Action } from '@craftsjs/ngrx-actions';
import { MenuStoreModel } from '../models/menu.store.model';
import { MenusLoaded, MenuMiniActivated, MenuOpened } from '../actions/menu.actions';


@Store<MenuStoreModel>({
    activeMenuMini: false,
    isOpen: false
})
export class MenuStore {

    @Action(MenusLoaded)
    menusLoaded(state: MenuStoreModel, { payload: { menus } }: MenusLoaded) {
        return { ...state, loading: false, menus };
    }

    @Action(MenuMiniActivated)
    menuMiniActivated(state: MenuStoreModel) {
        return { ...state, activeMenuMini: !state.activeMenuMini };
    }

    @Action(MenuOpened)
    menuOpened(state: MenuStoreModel) {
        return { ...state, isOpen: !state.isOpen };
    }

}
