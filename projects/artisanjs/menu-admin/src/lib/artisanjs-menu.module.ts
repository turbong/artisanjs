import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ReduxRegisterModule } from '@artisanjs/ngrx-actions';
import { PerfectScrollbarModule } from '@artisanjs/perfect-scrollbar';
import { artisanjsMenuComponent } from './artisanjs-menu.component';
import { MenuHeaderComponent } from './components/menu-header/menu-header.component';
import { MenuItemsLinkComponent } from './components/menu-items-link/menu-items-link.component';
import { MenuGroupComponent } from './components/menu-items-link/components/menu-group/menu-group.component';
import { MenuSingleComponent } from './components/menu-items-link/components/menu-single/menu-single.component';
import { MenuUserComponent } from './components/menu-user/menu-user.component';
import { MenuStore } from './store/menu.store';
import { SharedPrintMenuComponent } from './components/menu-items-link/components/shared-print-menu/shared-print-menu.component';
import { CollapseButtonMobileComponent } from './components/collapse-button-mobile/collapse-button-mobile.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    RouterModule,
    PerfectScrollbarModule,
    ReduxRegisterModule.forFeature('artisanjsmenu', { sidebar: MenuStore }),
  ],
  declarations: [
    artisanjsMenuComponent,
    CollapseButtonMobileComponent,
    MenuHeaderComponent,
    MenuItemsLinkComponent,
    MenuGroupComponent,
    MenuSingleComponent,
    MenuUserComponent,
    SharedPrintMenuComponent
  ],
  exports: [
    artisanjsMenuComponent,
    MenuUserComponent,
    MenuItemsLinkComponent,
    MenuHeaderComponent,
    CollapseButtonMobileComponent
  ]
})
export class MenuModule { }
