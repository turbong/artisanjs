# ADDAPPTABLES Perfect-scrollbar
Utility for scroll browser

## Getting Started
To get started, let's install the package through npm:

Choose the version corresponding to your Angular version:

 Angular     | @artisanjs/perfect-scrollbar
 ----------- | -------------------
 13          | 4.x
 12          | 3.x
 11          | 2.x
 10          | 1.x

```
npm i @artisanjs/perfect-scrollbar perfect-scrollbar --S
```

## How to use

Import PerfectScrollbarModule in your module

```javascript
   import { PerfectScrollbarModule } from '@artisanjs/perfect-scrollbar';
    @NgModule({
        imports: [PerfectScrollbarModule]
    })
    export class AddapptableModule { }
```

```css
    .menu-scroll-container{
        position: relative; //this property is important
    }
```
```html
<div perfectScrollbar class="menu-scroll-container">
    ...large content
</div>
```

Options
```javascript
export interface Options {
    handlers?: string[];
    maxScrollbarLength?: number;
    minScrollbarLength?: number;
    scrollingThreshold?: number;
    scrollXMarginOffset?: number;
    scrollYMarginOffset?: number;
    suppressScrollX?: boolean;
    suppressScrollY?: boolean;
    swipeEasing?: boolean;
    useBothWheelAxes?: boolean;
    wheelPropagation?: boolean;
    wheelSpeed?: number;
  }
```

```html
<div perfectScrollbar [perfectScrollOptions]="{ wheelPropagation: true }" class="menu-scroll-container">
    ...large content
</div>
```
