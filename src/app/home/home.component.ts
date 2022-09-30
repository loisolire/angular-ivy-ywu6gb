import { Component, OnInit } from '@angular/core';
import {Quotes} from "../model/quotes";
import {LocalService} from "../services/local-service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  quotesList?: { quotes : Quotes, name : string, symbol: string }[];

  constructor(private localService: LocalService) {
    this.quotesList = JSON.parse(this.localService.getData('list'));
  }

  ngOnInit(): void {
  }

  removePanel(index: number) {
    this.quotesList = this.quotesList.filter((_, i) => i !== index);
    this.localService.saveData('list', JSON.stringify(this.quotesList));
  }

  async updateList({quotes, name, symbol}) {
    if (!this.quotesList) {
      this.quotesList = [{quotes, name, symbol}];
    } else {
      this.quotesList = JSON.parse(this.localService.getData('list'));
      this.quotesList.push({quotes, name, symbol});
    }
    this.localService.saveData('list', JSON.stringify(this.quotesList));
  }

}
