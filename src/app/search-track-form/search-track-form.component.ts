import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {firstValueFrom, Observable, of} from 'rxjs';
import {FetchService} from '../services/fetch.service';
import {Quotes} from '../model/quotes';
import {Company} from '../model/company';

@Component({
  selector: 'app-search-track-form',
  templateUrl: './search-track-form.component.html',
  styleUrls: ['./search-track-form.component.css'],
})
export class SearchTrackFormComponent {
  @Output()
  submitForm: EventEmitter<{ quotes : Quotes, name: string, symbol: string}> = new EventEmitter();

  name = new FormControl('', [
    Validators.maxLength(5),
    Validators.required,
    Validators.pattern(/^[a-zA-Z]+$/),
  ]);

  constructor(
    private fetchService: FetchService
  ) {}

  onSubmit() {
    this.fetchService.getTrackingData(this.name.value).subscribe(
       {
         next : ([quotes, companies]) => {
           const name = companies?.find(company => company.symbol === this.name.value)?.description;
           const symbol = this.name.value;
           if(name && quotes){
             this.submitForm.emit({quotes, name, symbol});
             this.name.setValue('');
           }
         },
         error: err => console.log(err)
       }
    );
  }
}
