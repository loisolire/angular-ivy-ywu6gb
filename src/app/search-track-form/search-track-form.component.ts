import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FetchService } from '../fetch.service';

@Component({
  selector: 'app-search-track-form',
  templateUrl: './search-track-form.component.html',
  styleUrls: ['./search-track-form.component.css'],
})
export class SearchTrackFormComponent implements OnInit {
  name = new FormControl('', [
    Validators.maxLength(5),
    Validators.required,
    Validators.pattern(/^[a-zA-Z]+$/),
  ]);

  constructor(private fetchService: FetchService) {
    //getAllCompanyData(stock: string): Observable<companyData[]> {
    //  return this.http.get<companyData[]>(
    //     `https://finnhub.io/api/v1/search?token=bu4f8kn48v6uehqi3cqg&q=${stock}`
    //    );
    //  }
  }

  ngOnInit() {
      this.fetchService.getAllCompanyData('DRT').subscribe((data)=>{
          console.log(data);
      })
  }

  onSubmit() {
    console.warn(this.name);
  }
}
