import { Component } from '@angular/core';
import { team1 } from 'src/app/mocks/teams-mock/teams-mock';

import { BetStatus } from 'src/app/shared/models/bet-status.model';
@Component({
  selector: 'app-history-bet',
  templateUrl: './history-bet.component.html',
  styleUrls: ['./history-bet.component.css'],
})
export class HistoryBetComponent {
  //mock
  money = 0;
  status = BetStatus.Win;
  team = team1;
}
