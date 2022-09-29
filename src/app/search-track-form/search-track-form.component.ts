import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { FetchService } from '../fetch.service';
import { Quote } from '../model/quote';

@Component({
  selector: 'app-search-track-form',
  templateUrl: './search-track-form.component.html',
  styleUrls: ['./search-track-form.component.css'],
})
export class SearchTrackFormComponent {
  @Output()
  subbmitForm: EventEmitter<Quote> = new EventEmitter();

  name = new FormControl('', [
    Validators.maxLength(5),
    Validators.required,
    Validators.pattern(/^[a-zA-Z]+$/),
  ]);

  constructor(private fetchService: FetchService) {}

  onSubmit() {
    this.fetchService
      .getSymbolQuotes(this.name.value)
      .subscribe((data: Quote) => {
        this.subbmitForm.emit(data);
      });
  }
}
