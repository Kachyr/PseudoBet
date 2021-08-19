import { HistoryBetItemComponent } from './history-bet-item/history-bet-item.component';
import { BetStatusComponent } from './bet-status/bet-status.component';
import { HistoryBetComponent } from './history-bet.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    HistoryBetComponent,
    BetStatusComponent,
    HistoryBetItemComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [HistoryBetComponent],
})
export class HistoryBetModule {}
