import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { TradingInterfaceComponent } from './Components/trading-interface/trading-interface.component';
import { HistoryComponent } from './Components/history/history.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, TradingInterfaceComponent, HistoryComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
