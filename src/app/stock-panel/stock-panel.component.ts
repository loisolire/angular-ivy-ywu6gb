import { Component, Input, OnInit } from '@angular/core';
import { Quotes } from '../model/quotes';

@Component({
  selector: 'app-stock-panel',
  templateUrl: './stock-panel.component.html',
  styleUrls: ['./stock-panel.component.css'],
})
export class StockPanelComponent implements OnInit {
  @Input()
  quotes: Quotes;

  constructor() {}

  ngOnInit() {}
}
