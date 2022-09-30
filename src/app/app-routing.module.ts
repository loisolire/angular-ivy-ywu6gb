import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";
import {StockPanelDetailsComponent} from "./stock-panel-details/stock-panel-details.component";

const routes: Routes = [
  { path: 'list', component: HomeComponent },
  { path:'stock/:symbol', component: StockPanelDetailsComponent}];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
