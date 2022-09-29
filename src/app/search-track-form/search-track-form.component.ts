import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-track-form',
  templateUrl: './search-track-form.component.html',
  styleUrls: ['./search-track-form.component.css'],
})
export class SearchTrackFormComponent implements OnInit {
  name = new FormControl('', [
    Validators.maxLength(5),
    Validators.required,
    Validators.pattern(/[a-zA-Z]+/i),
  ]);

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    console.warn(this.name.errors);
  }
}
