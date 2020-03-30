import { createSelector } from '@ngrx/store';
import { MenuStoreModel } from '../models/menu.store.model';


export const selectMenuState = state => state.craftsjsmenu.sidebar as MenuStoreModel;

export const selectActiveMenuMini = createSelector(
    selectMenuState,
    sidebar => sidebar.activeMenuMini
);

export const selectMenuOpen = createSelector(
    selectMenuState,
    sidebar => sidebar.isOpen
);
