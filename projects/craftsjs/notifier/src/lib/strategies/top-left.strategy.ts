import { Injectable } from '@angular/core';
import { AbstractStrategy } from './abstract-strategy';
import { NotifierRef } from '../notifier-ref';

@Injectable()
export class TopLeftStrategy extends AbstractStrategy {

    protected getStyleNewNotifier(notifierRef: NotifierRef) {
        notifierRef.component._state = 'slideInDown';
        return { top: '20px', left: '0px' };
    }

    protected getStyleNotifierPosition(divNotifier: HTMLDivElement, clientHeight: number) {
        const lastValueBottom = Number(divNotifier.style.top.replace('px', ''));
        return { top: `${clientHeight + lastValueBottom + this.margin}px`, left: '0px' };
    }

    protected getStyleDeleteNotifier(elementChange: HTMLDivElement, clientHeightElementDelete: number) {
        const valueBottomChange = Number(elementChange.style.top.replace('px', ''));
        return { top: `${valueBottomChange - clientHeightElementDelete - this.margin}px`, left: '0px' };
    }
}
