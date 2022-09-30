import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quotes } from '../model/quotes';

@Component({
  selector: 'app-stock-panel',
  templateUrl: './stock-panel.component.html',
  styleUrls: ['./stock-panel.component.css'],
})
export class StockPanelComponent implements OnInit {
  @Input()
  quotes: Quotes;

  @Input()
  index: number;

  @Output()
  closePanelEvent: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  closePanel() {
    this.closePanelEvent.emit(this.index);
  }
}
