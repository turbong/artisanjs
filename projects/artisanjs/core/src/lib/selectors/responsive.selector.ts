import { ResponsiveStoreModel } from '../models/responsive-store.model';
import { createSelector } from '@ngrx/store';

export const selectResponsiveState = state => state.responsive.responsive as ResponsiveStoreModel;

export const selectAllScreen = createSelector(
    selectResponsiveState,
    responsive => responsive.screen
);
