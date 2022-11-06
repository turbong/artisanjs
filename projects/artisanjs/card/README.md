# ADDAPPTABLES card

artisanjs card is a library for angular

[See demo](http://addapptables.com/admin/components/cards)

[Example code](https://stackblitz.com/edit/angular-card-addapptables)

## Getting Started
To get started, let's install the package through npm:

Choose the version corresponding to your Angular version:

 Angular     | @artisanjs/card
 ----------- | -------------------
 13          | 4.x
 12          | 3.x
 11          | 2.x
 10          | 1.x

```
npm i @artisanjs/card --S
```

Install peer dependencies

```
npm i
@artisanjs/core
@angular/material
@angular/animations
@angular/cdk --S
```

## How to use

- Import the module CardModule

```typescript
import { CardModule } from '@artisanjs/card';
@NgModule({
  imports: [CardModule]
})
export class YourModule { }
```

simple card
```html
<artisanjs-card>
  <card-header>
    <card-header-linear>
      <card-title>
        <mat-icon matSuffix>horizontal_split</mat-icon>
        <span>Simple card</span>
      </card-title>
    </card-header-linear>
  </card-header>
  <mat-divider></mat-divider>
  <card-body>
    // custom component
  </card-body>
</artisanjs-card>
```

Oval card
```html
<artisanjs-card>
  <card-header>
    <card-header-oval>
      <card-title>
        <mat-icon matSuffix>horizontal_split</mat-icon>
        <span>Oval card</span>
      </card-title>
    </card-header-oval>
  </card-header>
  <card-body>
    // custom component
  </card-body>
</artisanjs-card>
```

- Finally, it is important to import the styles to the application

```scss
@import '~@artisanjs/core/artisanjs-grid.theme';
@import '~@angular/material/theming';
@import '~@artisanjs/card/artisanjs-card.theme';

$artisanjs-app-primary: mat-palette($mat-teal, 800);
$artisanjs-app-accent:  mat-palette($mat-pink, 800, A100, 100);
$artisanjs-app-warn: mat-palette($mat-red);
$artisanjs-app-theme: mat-light-theme($artisanjs-app-primary, $artisanjs-app-accent, $artisanjs-app-warn);
$artisanjs-theme-variables: (
    text: white,
    border-radius: 5px,
    color-blue: #20a9d2,
    color-success: #5cb85c,
    color-info: #5bc0de,
    color-warning: #e09d3d,
    color-danger: #d43934,
    gray-color: #696868
);
@include mat-core();
body.theme-default {
    @include angular-material-theme($artisanjs-app-theme);
    @include card($artisanjs-app-theme, $artisanjs-theme-variables);
}
```

- Do not forget to put the theme-default class in the html body

```html
<body class="theme-default"></body>
```
