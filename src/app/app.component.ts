import { Component, OnInit, VERSION } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { Quotes } from './model/quotes';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    window.localStorage.getItem('alpha');
  }
  name = 'Angulars ' + VERSION.major;

  quotes?: Quotes;

  async setDisplay(data: Observable<Quotes>) {
    this.quotes = await firstValueFrom(data);
  }
}
