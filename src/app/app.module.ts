import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InterfaceFormModule } from './interface-form/interface-form.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ChartComponent } from './chart/chart.component';
import { TimerComponent } from './timer/timer.component';
import { HistoryModule } from './history/history.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, TimerComponent, ChartComponent],
  imports: [BrowserModule, InterfaceFormModule, HistoryModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
