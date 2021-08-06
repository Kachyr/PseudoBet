import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { InterfaceFormModule } from './interface-form/interface-form.module';

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
    TimerComponent,
    ChartComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, InterfaceFormModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
