import {Injectable} from '@angular/core';
import {
   Router, Resolve,
   RouterStateSnapshot,
   ActivatedRouteSnapshot
} from '@angular/router';
import {map, Observable, of} from 'rxjs';
import {getDateString} from '../utils';
import {FetchService} from '../services/fetch.service';
import {Sentiment} from '../model/sentiment';

@Injectable({
   providedIn: 'root'
})
export class StockPanelsDetailsResolver implements Resolve<Sentiment[]> {
   constructor(private fetchService: FetchService) {
   }

   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Sentiment[]> {
      const today = new Date();
      today.setMonth(today.getMonth() - 2);
      const twoMonthsBefore = new Date();
      twoMonthsBefore.setMonth(today.getMonth() - 2);
      const symbol: string = route.params.symbol;
      return this.fetchService.getSentiments(symbol, getDateString(twoMonthsBefore), getDateString(today))
         .pipe(map((dat: {data: Sentiment[]}) => {
            const list = [];
            for(let i = twoMonthsBefore.getMonth() + 1; i <= today.getMonth() + 1;i++ ){
               list.push(dat.data.find(sentiment => sentiment.month === i) || {month: i});
            }
            return list;
         }));
   }
}
