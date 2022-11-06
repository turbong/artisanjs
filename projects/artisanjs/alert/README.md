# artisanjs alert

artisanjs alert is a library for angular

[See demo](http://artisanjs.com/admin/components/modals-alerts)

[Example code](https://stackblitz.com/edit/angular-alert-artisanjs)

## Getting Started
To get started, let's install the package through npm:

Choose the version corresponding to your Angular version:

 | Angular | @artisanjs/alert |
 | ------- | --------------- |
 | 13      | 4.x             |
 | 12      | 3.x             |
 | 11      | 2.x             |
 | 10      | 1.x             |

```
npm i @artisanjs/alert --S
```

Install peer dependencies

```
npm i
@artisanjs/core
@ngx-translate/core
@angular/material
@angular/cdk
@angular/animations --S
```

## Configuration

- First, you have to configure the library @ngx-translate/core to have the translation into the alert

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

## How to use

- Import the module AlertModule into the AppModule

```typescript
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertModule } from '@artisanjs/alert';
@NgModule({
  imports: [
      BrowserModule,
      BrowserAnimationsModule,
      AlertModule.forRoot()
  ]
})
export class AppModule { }
```

```typescript
@Component()
export class AlertComponent {

  constructor(private _alertService: AlertService) { }

  openDialog() {
    this._alertService.showSimple('Alert', 'Simple alert');
    // this._alertService.showSuccess('Success', 'Saved successfully');
    // this._alertService.showWarning('Warn', 'Warning');
    // this._alertService.showInfo('Info', 'Information');
    // this._alertService.showError('Error', 'Error');
  }

  openDialodgConfirmation(){
    const dialog = this._alertService.showConfirmation('Confirmation', 'Are you sure delete alert?');
    dialog.beforeClose().subscribe((result) => {
      if (!result) { return; }
      switch (result.result) {
        case 'ok':
          console.log('ok');
          break;
        case 'cancel':
          console.log('cancel');
          break;
      }
    });
  }
}
```

```html
    <button type="button" mat-raised-button color="primary" (click)="openDialog()">Alert warning</button>
```

- Finally, it is important to import the styles to the application

```scss
@import '~@artisanjs/alert/artisanjs-alert.theme';
@import '~@angular/material/theming';

$artisanjs-app-primary: mat-palette($mat-teal, 800);
$artisanjs-app-accent:  mat-palette($mat-pink, 800, A100, 100);
$artisanjs-app-warn: mat-palette($mat-red);
$artisanjs-app-theme: mat-light-theme($artisanjs-app-primary, $artisanjs-app-accent, $artisanjs-app-warn);
$artisanjs-theme-variables: (
    color-info: #20a9d2,
    color-success: #5cb85c,
    color-danger: #d43934,
    color-warning: #e09d3d
);

@include mat-core();
body.theme-default{
    @include angular-material-theme($artisanjs-app-theme);
    @include alert($artisanjs-theme-variables);
}
```

- Don't forget to put the theme-default class in the html body

```html
<body class="theme-default"></body>
```
