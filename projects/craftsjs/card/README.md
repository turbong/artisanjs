# ADDAPPTABLES card

Craftsjs card is a library for angular

[See demo](http://addapptables.com/admin/components/cards)

[Example code](https://stackblitz.com/edit/angular-card-addapptables)

## Getting Started
To get started, let's install the package through npm:

Choose the version corresponding to your Angular version:

 Angular     | @craftsjs/card
 ----------- | -------------------
 9           | 1.x

```
npm i @craftsjs/card --S
```

Install peer dependencies

```
npm i
@craftsjs/core
@angular/material
@angular/animations
@angular/cdk --S
```

## How to use

- Import the module CardModule

```typescript
import { CardModule } from '@craftsjs/card';
@NgModule({
  imports: [CardModule]
})
export class YourModule { }
```

simple card
```html
<card>
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
</card>
```

Oval card
```html
<card>
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
</card>
```

- Finally, it is important to import the styles to the application

```scss
@import '~@craftsjs/core/craftsjs-grid.theme';
@import '~@angular/material/theming';
@import '~@craftsjs/card/craftsjs-card.theme';

$craftsjs-app-primary: mat-palette($mat-teal, 800);
$craftsjs-app-accent:  mat-palette($mat-pink, 800, A100, 100);
$craftsjs-app-warn: mat-palette($mat-red);
$craftsjs-app-theme: mat-light-theme($craftsjs-app-primary, $craftsjs-app-accent, $craftsjs-app-warn);
$craftsjs-theme-variables: (
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
    @include angular-material-theme($craftsjs-app-theme);
    @include card($craftsjs-app-theme, $craftsjs-theme-variables);
}
```

- Do not forget to put the theme-default class in the html body

```html
<body class="theme-default"></body>
```