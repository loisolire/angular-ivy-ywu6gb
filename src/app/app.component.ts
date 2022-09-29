import { Component, VERSION } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { Quotes } from './model/quotes';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angulars ' + VERSION.major;

  display?: Quotes;

  async setDisplay(data: Observable<Quotes>) {
    this.display = await firstValueFrom(data);
  }
}
