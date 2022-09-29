import { Component, VERSION } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { Quote } from './model/quote';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angulars ' + VERSION.major;

  display?: Quote;

  setDisplay(data: Quote) {
    this.display = data;
  }
}
