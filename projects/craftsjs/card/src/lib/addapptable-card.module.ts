import { NgModule } from '@angular/core';
import { CardComponent } from './addapptable-card.component';
import { CardHeaderComponent } from './components/card-header/card-header.component';
import { CardTitleDirective } from './directives/card-title.directive';
import { CardBodyDirective } from './directives/card-body.directive';
import { CardFooterDirective } from './directives/card-footer.directive';
import { CardDividerDirective } from './directives/card-divider.directive';
import { CardHeaderMarkDirective } from './directives/card-header-mark.directive';
import { CardHeaderSubtitleDirective } from './directives/card-header-subtitle.directive';
import { CardHeaderOvalComponent } from './components/card-header/components/card-header-oval/card-header-oval.component';
import { CardHeaderLinearComponent } from './components/card-header/components/card-header-linear/card-header-linear.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CardComponent,
    CardHeaderComponent,
    CardTitleDirective,
    CardBodyDirective,
    CardFooterDirective,
    CardDividerDirective,
    CardHeaderMarkDirective,
    CardHeaderSubtitleDirective,
    CardHeaderOvalComponent,
    CardHeaderLinearComponent
  ],
  exports: [
    CardComponent,
    CardHeaderComponent,
    CardTitleDirective,
    CardBodyDirective,
    CardFooterDirective,
    CardDividerDirective,
    CardHeaderSubtitleDirective,
    CardHeaderMarkDirective,
    CardHeaderOvalComponent,
    CardHeaderLinearComponent
  ]
})
export class CardModule { }
