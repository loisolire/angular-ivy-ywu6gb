import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {forkJoin, Observable, map} from 'rxjs';
import { Quotes } from '../model/quotes';
import {Company} from '../model/company';

@Injectable({
  providedIn: 'root',
})
export class FetchService {
  constructor(private http: HttpClient) {}

  getSentiments(stock: string, from: string, to: string): Observable<{}>{
    return this.http.get<{}>(
        `https://finnhub.io/api/v1/stock/insider-sentiment?symbol=${stock}&from=${from}&to=${to}&token=bu4f8kn48v6uehqi3cqg`
    )
  }

  getTrackingData(stock: string): Observable<[Quotes, Company[]]>{
    return forkJoin([
      this.http.get<{
        d: number;
        o: number;
        c: number;
        h: number;
      }>(
         `https://finnhub.io/api/v1/quote?symbol=${stock}&token=bu4f8kn48v6uehqi3cqg`
      ),
      this.http.get<{count: number, result: Company[]}>(
         `https://finnhub.io/api/v1/search?q=${stock}&token=bu4f8kn48v6uehqi3cqg`
      )
    ]).pipe(map(([quotesResultSet,companiesResultSet]) => {
      const quotes = {
        changeToday : quotesResultSet.d,
        openingPrice : quotesResultSet.o,
        currentPrice : quotesResultSet.c,
        highPrice : quotesResultSet.h
      }
      return [quotes, companiesResultSet.result];
    }))
  }
}
