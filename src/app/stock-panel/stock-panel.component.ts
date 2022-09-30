import {Component, EventEmitter, HostBinding, HostListener, Input, OnInit, Output} from '@angular/core';
import { Quotes } from '../model/quotes';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-stock-panel',
  templateUrl: './stock-panel.component.html',
  styleUrls: ['./stock-panel.component.css'],
})
export class StockPanelComponent implements OnInit {
  @Input()
  quotes: Quotes;

  @Input()
  symbolName: string;

  @Input()
  symbol: string;

  @Input()
  index: number;

  @Output()
  closePanelEvent: EventEmitter<number> = new EventEmitter<number>();

  constructor(private router: Router) {}

  ngOnInit() {
    this.quotes.changeToday /= 100;
  }

  goToSentimentDetails() {
    this.router.navigate(['/','stock', this.symbol]);
  }

  closePanel() {
    this.closePanelEvent.emit(this.index);
  }
}
