import { Component, VERSION } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angulars ' + VERSION.major;

  display?: Promise<any>;

  setDisplay(obs: Observable<any>) {
    this.display = firstValueFrom(obs);
  }
}
