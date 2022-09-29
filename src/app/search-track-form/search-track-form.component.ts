import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { nameValidator } from '../shared/name-validator';

@Component({
  selector: 'app-search-track-form',
  templateUrl: './search-track-form.component.html',
  styleUrls: ['./search-track-form.component.css'],
})
export class SearchTrackFormComponent implements OnInit {
  name = new FormControl('', [
    Validators.maxLength(5),
    Validators.required,
    nameValidator(/[0-9]+/),
  ]);

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    console.warn(this.name);
  }
}
