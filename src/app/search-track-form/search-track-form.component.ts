import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-track-form',
  templateUrl: './search-track-form.component.html',
  styleUrls: ['./search-track-form.component.css'],
})
export class SearchTrackFormComponent implements OnInit {
  name = new FormControl('');

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    console.warn(this.name);
  }
}
