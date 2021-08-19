import { HistoryBetModule } from './history-bet/history-bet.module';
import { HistoryGamesComponent } from './history-games/history-games.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HistoryGamesComponent, HistoryGamesComponent],
  imports: [CommonModule, HistoryBetModule],
  exports: [HistoryBetModule, HistoryGamesComponent],
})
export class HistoryModule {}
