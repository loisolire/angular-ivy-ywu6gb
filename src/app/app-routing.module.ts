import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {StockPanelDetailsComponent} from './stock-panel-details/stock-panel-details.component';
import {StockPanelsDetailsResolver} from './stock-panel-details/stock-panels-details.resolver';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path:'sentiment/:symbol', component: StockPanelDetailsComponent, resolve: {sentiments: StockPanelsDetailsResolver}}];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
