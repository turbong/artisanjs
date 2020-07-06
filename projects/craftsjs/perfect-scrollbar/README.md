# ADDAPPTABLES Perfect-scrollbar
Utility for scroll browser

## Getting Started
To get started, let's install the package through npm:

Choose the version corresponding to your Angular version:

 Angular     | @craftsjs/perfect-scrollbar
 ----------- | -------------------
 10          | 1.x

```
npm i @craftsjs/perfect-scrollbar perfect-scrollbar --S
```

## How to use

Import PerfectScrollbarModule in your module

```javascript
   import { PerfectScrollbarModule } from '@craftsjs/perfect-scrollbar';
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