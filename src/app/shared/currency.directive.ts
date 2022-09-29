import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[currency]',
})
export class CurrencyDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.style.color = 'red';
  }
}
