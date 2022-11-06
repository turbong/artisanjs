# artisanjs modal

artisanjs modal is a library for angular

[See demo](http://artisanjs.com/admin/ecommerce/products)

## Getting Started
To get started, let's install the package through npm:

Choose the version corresponding to your Angular version:

 Angular     | @artisanjs/modal
 ----------- | -------------------
 13          | 4.x
 12          | 3.x
 11          | 2.x
 10          | 1.x

```
npm i @artisanjs/modal --S
```

Install peer dependencies

```
npm i
@artisanjs/perfect-scrollbar
perfect-scrollbar
@angular/material
@angular/cdk
@angular/animations --S
```

## How to use

- Import the module AlertModule into the AppModule

```typescript
import { ModalModule } from '@artisanjs/modal';
@NgModule({
  imports: [ModalModule.forRoot({ width: '800px' })]
})
export class AppModule { }
```

- Create a component modal

```typescript
@Component({
...
})
export class FormModalComponent {

  constructor(
    private _dialogRef: MatDialogRef<FormModalComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  close() {
    this._dialogRef.close();
  }

}
```

```html
<artisanjs-modal>
  <modal-header>
    <h3 class="text-accent">Title</h3>
    <button mat-icon-button (click)="close()">
      <mat-icon suffix>close</mat-icon>
    </button>
  </modal-header>
  <modal-body>
    //modal body
  </modal-body>
  <modal-footer>
    <button type="submit" mat-raised-button color="accent">
      Save
    </button>
    <button type="button" mat-raised-button (click)="close()">Close</button>
  </modal-footer>
</artisanjs-modal>
```

```typescript
import { ModalModule } from '@artisanjs/modal';

@NgModule({
  imports: [ModalModule],
  entryComponents: [
    FormModalComponent // this line is important
  ]
})
export class OtherModule { }
```

```typescript
@Component({
...
})
export class ProductListComponent {

  constructor(
    private _modalService: ModalService
  ) { }

  showModal() {
    this._modalService.show(FormModalComponent);
  }
}
```
