import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FetchService {
  constructor(private http: HttpClient) {}

  //https://finnhub.io/api/v1/search?q=apple&token=bu4f8kn48v6uehqi3cqg  COMPANY NAME
  //https://finnhub.io/api/v1/quote?symbol=AAPL&token=bu4f8kn48v6uehqi3cqg

  getAllCompanyData(stock: string): Observable<any> {
    return this.http.get<any>(
      `https://finnhub.io/api/v1/search?token=bu4f8kn48v6uehqi3cqg&q=${stock}`
    );
  }
}
