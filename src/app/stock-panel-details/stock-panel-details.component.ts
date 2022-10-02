import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FetchService} from '../services/fetch.service';
import {monthNames} from '../utils';
import {Sentiment} from '../model/sentiment';

@Component({
  selector: 'app-stock-panel-details',
  templateUrl: './stock-panel-details.component.html',
  styleUrls: ['./stock-panel-details.component.css']
})
export class StockPanelDetailsComponent implements OnInit {

  sentiments?: Sentiment[];
  changeTodayUp = false;
  monthNames = monthNames;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private fetchService: FetchService) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data: { sentiments: Sentiment[]}) => {
      this.sentiments = data.sentiments;
    });
  }

  backToList(): void {
    this.router.navigate(['']);
  }

}
