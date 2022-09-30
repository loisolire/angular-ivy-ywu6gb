import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Route, Router} from "@angular/router";
import {FetchService} from "../services/fetch.service";
import {getDateString, monthNames} from "../utils";
import {Sentiment} from "../model/sentiment";

@Component({
  selector: 'app-stock-panel-details',
  templateUrl: './stock-panel-details.component.html',
  styleUrls: ['./stock-panel-details.component.css']
})
export class StockPanelDetailsComponent implements OnInit {

  sentiments?: Sentiment[];
  changeTodayUp = false;
  monthNames = monthNames;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private fetchService: FetchService) { }

  ngOnInit(): void {
    const today = new Date();
    const threeMonthsBefore = new Date();
    threeMonthsBefore.setMonth(today.getMonth() - 3);
    this.fetchService.getSentiments(this.activatedRoute.snapshot.params.symbol, getDateString(threeMonthsBefore), getDateString(today)).subscribe((data: {data: Sentiment[]}) => {
      console.log(data)
      this.sentiments = data.data;
    });
  }

  backToList():void {
    this.router.navigate(['list']);
  }

}
