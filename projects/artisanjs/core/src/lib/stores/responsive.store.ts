import { Store, Action } from '@artisanjs/ngrx-action';
import { ResponsiveStoreModel } from '../models/responsive-store.model';
import * as ResponseActions from '../actions/responsive.actions';

@Store<ResponsiveStoreModel>({
    screen: {
        xs: false,
        sm: false,
        md: false,
        lg: false,
        xl: false
    }
})
export class ResponsiveStore {

    readonly SMALL = 576;
    readonly MEDIUM = 768;
    readonly LARGE = 992;
    readonly EXTRA_LARGE = 1200;

    @Action(ResponseActions.screenChanged)
    screenChanged(state: ResponsiveStoreModel, { payload: { width } }) {
        const xs = width <= this.SMALL;
        const sm = width > this.SMALL && width <= this.MEDIUM;
        const md = width > this.MEDIUM && width <= this.LARGE;
        const lg = width > this.LARGE && width <= this.EXTRA_LARGE;
        const xl = width > this.EXTRA_LARGE;

        const screen = {
            xs, sm, md, lg, xl
        };
        return { ...state, screen };
    }

}
