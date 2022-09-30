import { Component, VERSION } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { LocalService } from './services/local-service';
import { Quotes } from './model/quotes';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angulars ' + VERSION.major;

  quotesList?: Quotes[];

  constructor(private localService: LocalService) {
    this.quotesList = JSON.parse(this.localService.getData('list'));
  }

  removePanel(index: number) {
    this.quotesList = this.quotesList.filter((_, i) => i !== index);
    this.localService.saveData('list', JSON.stringify(this.quotesList));
  }

  async updateList(data: Observable<Quotes>) {
    const newQuotes = await firstValueFrom(data);
    if (!this.quotesList) {
      this.quotesList = [newQuotes];
    } else {
      this.quotesList = JSON.parse(this.localService.getData('list'));
      this.quotesList.push(newQuotes);
    }
    this.localService.saveData('list', JSON.stringify(this.quotesList));
  }
}
