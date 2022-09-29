import { CurrencyPipe } from '@angular/common';
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCurrency]',
})
export class CurrencyDirective {
  constructor(private el: ElementRef, currencyPipe: CurrencyPipe) {
    let innerText = el.nativeElement.innerText;
    innerText = currencyPipe.transform(innerText, 'USD', true);
  }
}
