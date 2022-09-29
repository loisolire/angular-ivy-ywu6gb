import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SearchTrackFormComponent } from './search-track-form/search-track-form.component';
import { HttpClientModule } from '@angular/common/http';
import { StockPanelComponent } from './stock-panel/stock-panel.component';
import { CommonModule, CurrencyPipe } from '@angular/common';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    SearchTrackFormComponent,
    StockPanelComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
