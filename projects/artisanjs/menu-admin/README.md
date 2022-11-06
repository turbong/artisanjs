# artisanjs menu

ADAPTABLES menu is a library for angular

[See demo](http://artisanjs.com/admin/dashboard)

[Example code](https://stackblitz.com/edit/angular-menu-artisanjs)

## Getting Started
To get started, let's install the package through npm:

Choose the version corresponding to your Angular version:

 | Angular | @artisanjs/menu-admin |
 | ------- | -------------------- |
 | 13      | 4.x                  |
 | 12      | 3.x                  |
 | 11      | 2.x                  |
 | 10      | 1.x                  |

```
npm i @artisanjs/menu-admin --S
```

Install peer dependencies

```
npm i
@artisanjs/responsive
@artisanjs/ngrx-actions
@artisanjs/perfect-scrollbar
@artisanjs/core
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

- artisanjs menu uses the library ngrx as a base, you have to set this library in your AppModule as follows:

```typescript
import { ResponsiveModule } from '@artisanjs/responsive';
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

import { MenuModule } from '@artisanjs/menu';
@NgModule({
  imports: [MenuModule]
  declarations: [MenuComponent]
})
export class YourModule { }


// component
import { MenuModel, MenuHeaderModel, MenuUserModel } from '@artisanjs/menu';
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
        companyName: 'artisanjs',
        logoUrl: 'assets/images/logo/addaptables.svg'
    };

    // user data
    user: MenuUserModel = {
        initialName: 'Cf',
        fullName: 'artisanjs',
        email: 'dev@artisanjs.com',
        avatarUrl: 'assets/images/avatars/Velazquez.jpg'
    };
}
```

- So now you can use the variables into the html as follows

```html
<artisanjs-menu>
  <menu-header [header]="header">
  </menu-header>
  <menu-user [user]="user">
  </menu-user>
  <menu-items-link [menus]="menus">
  </menu-items-link>
</artisanjs-menu>
```

- In cellphone mode you can use the following component to collapse the menu

```html
    <button-mobile></button-mobile>
```

- Finally, it is important to import the styles to the application

```scss
@import '~@artisanjs/core/artisanjs-grid.theme';
@import '~@angular/material/theming';
@import '~@artisanjs/menu/_artisanjs-menu.theme.scss';

$app-primary: mat-palette($mat-teal, 800);
$artisanjs-app-accent:  mat-palette($mat-pink, 800, A100, 100);
$artisanjs-app-warn: mat-palette($mat-red);
$artisanjs-app-theme: mat-light-theme($artisanjs-app-primary, $artisanjs-app-accent, $artisanjs-app-warn);
$artisanjs-theme-variables: (
    text: white,
    transition-time: 250ms,
    border-radius: 5px
);
@include mat-core();
body.theme-default {
    @include angular-material-theme($artisanjs-app-theme);
    @include menu($artisanjs-app-theme, $artisanjs-theme-variables);
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
