import { ResponsiveStoreModel } from '../models/responsive-store.model';
import { createSelector } from '@ngrx/store';

export const selectResponsiveState = state => <ResponsiveStoreModel>state.responsive.responsive;

export const selectAllScreen = createSelector(
    selectResponsiveState,
    responsive => responsive.screen
);
