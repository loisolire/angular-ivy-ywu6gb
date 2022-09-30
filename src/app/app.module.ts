import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SearchTrackFormComponent } from './search-track-form/search-track-form.component';
import { HttpClientModule } from '@angular/common/http';
import { StockPanelComponent } from './stock-panel/stock-panel.component';
import {CommonModule, HashLocationStrategy, LocationStrategy} from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { StockPanelDetailsComponent } from './stock-panel-details/stock-panel-details.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    SearchTrackFormComponent,
    StockPanelComponent,
    HomeComponent,
    StockPanelDetailsComponent,
  ],
  bootstrap: [AppComponent],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}]
})
export class AppModule {}
