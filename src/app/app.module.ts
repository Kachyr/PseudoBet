import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InterfaceFormModule } from './interface-form/interface-form.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ChartComponent } from './chart/chart.component';

import { HistoryModule } from './history/history.module';
import { TimerModule } from './timer/timer.module';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [AppComponent, HeaderComponent, ChartComponent],
  imports: [
    BrowserModule,
    InterfaceFormModule,
    HistoryModule,
    TimerModule,
    ChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
