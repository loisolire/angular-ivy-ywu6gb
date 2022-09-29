import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCurrency]',
})
export class CurrencyDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.style.color = 'red';
  }
}
