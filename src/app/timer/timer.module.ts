import { TimerComponent } from './timer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerFormat } from './timer-format.pipe';

@NgModule({
  declarations: [TimerComponent, TimerFormat],
  imports: [CommonModule],
  exports: [TimerComponent],
})
export class TimerModule {}
