import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { TradingInterfaceComponent } from './Components/trading-interface/trading-interface.component';
import { HistoryComponent } from './Components/history/history.component';
import { ChartComponent } from './Components/trading-interface/chart/chart.component';
import { PurchaseFormComponent } from './Components/trading-interface/purchase-form/purchase-form.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, TradingInterfaceComponent, HistoryComponent, ChartComponent, PurchaseFormComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
