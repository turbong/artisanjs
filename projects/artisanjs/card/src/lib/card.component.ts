import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'artisanjs-card',
  templateUrl: './card.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'card' }
})
export class CardComponent { }
