import { Component, Input, OnInit } from '@angular/core';
import { BetStatus } from '../bet-status/bet-status.model';

@Component({
  selector: 'app-history-bet-item',
  templateUrl: './history-bet-item.component.html',
  styleUrls: ['./history-bet-item.component.css'],
})
export class HistoryBetItemComponent implements OnInit {
  @Input() money!: number;

  status = BetStatus.Win;

  ngOnInit(): void {
    setTimeout(() => {
      this.status = BetStatus.Lose;
    }, 2000);
  }
}
