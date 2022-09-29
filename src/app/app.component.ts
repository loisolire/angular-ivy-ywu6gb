import { Component, OnInit, VERSION } from '@angular/core';
import { first, firstValueFrom, Observable } from 'rxjs';
import { LocalService } from './local-service';
import { Quotes } from './model/quotes';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angulars ' + VERSION.major;

  quotesList?: Quotes[];

  constructor(private localService: LocalService) {}

  async setList(data: Observable<Quotes>) {
    const newQuotes = await firstValueFrom(data);
    if (this.quotesList.length === 0) {
      this.quotesList = [newQuotes];
    } else {
      this.quotesList = JSON.parse(this.localService.getData('list'));
      this.quotesList.push(newQuotes);
    }
    this.localService.saveData('list', JSON.stringify(this.quotesList));
  }
}
