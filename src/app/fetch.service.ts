import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class FetchService {
  constructor(private http: HttpClient) {}

  getAllCompanyData(stock: string): Observable<any> {
    return this.http.get<any>(
      `https://finnhub.io/api/v1/search?token=bu4f8kn48v6uehqi3cqg&q=${stock}`
    );
  }
}
