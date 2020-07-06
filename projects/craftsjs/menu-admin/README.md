# craftsjs menu

ADAPTABLES menu is a library for angular

[See demo](http://craftsjs.com/admin/dashboard)

[Example code](https://stackblitz.com/edit/angular-menu-craftsjs)

## Getting Started
To get started, let's install the package through npm:

Choose the version corresponding to your Angular version:

 | Angular | @craftsjs/menu-admin |
 | ------- | -------------------- |
 | 10      | 1.x                  |

```
npm i @craftsjs/menu-admin --S
```

Install peer dependencies

```
npm i
@craftsjs/responsive
@craftsjs/ngrx-actions
@craftsjs/perfect-scrollbar
@craftsjs/core
perfect-scrollbar
@ngrx/store
@ngx-translate/core --S
```

## Configuration

- First, you have to configure the library @ngx-translate/core to have the translation into the menu

The library is configured as follows:

```typescript
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
    imports: [
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            }
        })
    ]
})
export class AppModule { }
```

- To obtain more information about @ngx-translate/core view [link](https://github.com/ngx-translate/core)

- craftsjs menu uses the library ngrx as a base, you have to set this library in your AppModule as follows:

```typescript
import { ResponsiveModule } from '@craftsjs/responsive';
@NgModule({
    imports: [
        StoreModule.forRoot(...your configuration),
        EffectsModule.forRoot([]),
        ResponsiveModule // important
    ],
})
export class AppModule { }
```

- To obtain more information about ngrx view [link](https://ngrx.io/guide/store)

## How to use?

- First, you have to create a module and import MenuModule as follows:

```typescript

import { MenuModule } from '@craftsjs/menu';
@NgModule({
  imports: [MenuModule]
  declarations: [MenuComponent]
})
export class YourModule { }


// component
import { MenuModel, MenuHeaderModel, MenuUserModel } from '@craftsjs/menu';
@Component(
    ...
)
export class MenuComponent {
    // variable to show the links of the menu
    menus: MenuModel[] = [
    {
        id: '1',
        class: 'material-icons',
        value: 'dashboard',
        title: 'menu.dashboard',
        isOpen: false,
        multiOption: false,
        url: '/admin/dashboard',
        exact: true,
    },
    {
        id: '2',
        class: 'material-icons',
        value: 'chrome_reader_mode',
        title: 'menu.forms',
        isOpen: false,
        multiOption: true,
        exact: true,
        children: [
            {
                id: '3',
                value: 'BF',
                title: 'menu.form.basicForm',
                isOpen: false,
                multiOption: false,
                url: '/admin/forms/basic-form',
                exact: true
            }
        ]
    }]

    // header of the menu
    header: MenuHeaderModel = {
        companyName: 'craftsjs',
        logoUrl: 'assets/images/logo/addaptables.svg'
    };

    // user data
    user: MenuUserModel = {
        initialName: 'Cf',
        fullName: 'Craftsjs',
        email: 'dev@craftsjs.com',
        avatarUrl: 'assets/images/avatars/Velazquez.jpg'
    };
}
```

- So now you can use the variables into the html as follows

```html
<craftsjs-menu>
  <menu-header [header]="header">
  </menu-header>
  <menu-user [user]="user">
  </menu-user>
  <menu-items-link [menus]="menus">
  </menu-items-link>
</craftsjs-menu>
```

- In cellphone mode you can use the following component to collapse the menu

```html
    <button-mobile></button-mobile>
```

- Finally, it is important to import the styles to the application

```scss
@import '~@craftsjs/core/craftsjs-grid.theme';
@import '~@angular/material/theming';
@import '~@craftsjs/menu/_craftsjs-menu.theme.scss';

$app-primary: mat-palette($mat-teal, 800);
$craftsjs-app-accent:  mat-palette($mat-pink, 800, A100, 100);
$craftsjs-app-warn: mat-palette($mat-red);
$craftsjs-app-theme: mat-light-theme($craftsjs-app-primary, $craftsjs-app-accent, $craftsjs-app-warn);
$craftsjs-theme-variables: (
    text: white,
    transition-time: 250ms,
    border-radius: 5px
);
@include mat-core();
body.theme-default {
    @include angular-material-theme($craftsjs-app-theme);
    @include menu($craftsjs-app-theme, $craftsjs-theme-variables);
}
```

- Do not forget to put the theme-default class on the html body

```html
<body class="theme-default"></body>
```

# Assets

Background menu sidebar

```
/assets/images/backgrounds/sidebar.jpg
```
