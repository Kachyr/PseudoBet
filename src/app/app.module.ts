import { InterfaceFormComponent } from './interface-form/interface-form.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HistoryComponent } from './history/history.component';
import { ChartComponent } from './chart/chart.component';
import { TimerComponent } from './timer/timer.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HistoryComponent,
    InterfaceFormComponent,
    TimerComponent,
    ChartComponent,
    ChartComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
