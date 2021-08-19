import { team1 } from './../../../mocks/teams-mock/teams-mock';
import { Component, Input } from '@angular/core';
import { BetStatus } from 'src/app/shared/models/bet-status.model';

@Component({
  selector: 'app-history-bet-item',
  templateUrl: './history-bet-item.component.html',
  styleUrls: ['./history-bet-item.component.css'],
})
export class HistoryBetItemComponent {
  @Input() index!: number;
  @Input() money = 0;
  @Input() status = BetStatus.Win;
  @Input() team = team1; //mock
}
