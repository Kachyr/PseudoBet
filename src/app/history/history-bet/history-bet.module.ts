import { HistoryBetItemComponent } from './history-bet-item/history-bet-item.component';
import { BetStatusComponent } from './bet-status/bet-status.component';
import { HistoryBetComponent } from './history-bet.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HistoryBetComponent,
    BetStatusComponent,
    HistoryBetItemComponent,
  ],
  imports: [CommonModule],
  exports: [HistoryBetComponent],
})
export class HistoryBetModule {}
