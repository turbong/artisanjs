import { NgModule } from '@angular/core';
import { ReduxRegisterModule } from '@craftsjs/ngrx-action';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { PerfectScrollbarModule } from '@craftsjs/perfect-scrollbar';
import { MenuComponent } from './menu.component';
import { MenuHeaderComponent } from './components/menu-header/menu-header.component';
import { MenuItemsLinkComponent } from './components/menu-items-link/menu-items-link.component';
import { MenuGroupComponent } from './components/menu-items-link/components/menu-group/menu-group.component';
import { MenuSingleComponent } from './components/menu-items-link/components/menu-single/menu-single.component';
import { MenuUserComponent } from './components/menu-user/menu-user.component';
import { MenuStore } from './store/menu.store';
import { SharedPrintMenuComponent } from './components/menu-items-link/components/shared-print-menu/shared-print-menu.component';
import { ButtonMobileComponent } from './components/button-mobile/button-mobile.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    RouterModule,
    PerfectScrollbarModule,
    ReduxRegisterModule.forFeature('craftsjsmenu', { sidebar: MenuStore }),
  ],
  declarations: [
    MenuComponent,
    ButtonMobileComponent,
    MenuHeaderComponent,
    MenuItemsLinkComponent,
    MenuGroupComponent,
    MenuSingleComponent,
    MenuUserComponent,
    SharedPrintMenuComponent
  ],
  exports: [
    MenuComponent,
    MenuUserComponent,
    MenuItemsLinkComponent,
    MenuHeaderComponent,
    ButtonMobileComponent
  ]
})
export class MenuModule { }
