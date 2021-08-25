import { map } from 'rxjs/operators';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { team1 } from 'src/app/mocks/teams/teams-mock';
import { DataRepository } from 'src/app/repository/repository.service';

import { BetStatus } from 'src/app/shared/enums/bet-status.enum';
import { Bet } from 'src/app/shared/models/bet.model';
@Component({
  selector: 'app-history-bet',
  templateUrl: './history-bet.component.html',
  styleUrls: ['./history-bet.component.css'],
})
export class HistoryBetComponent implements OnInit, OnDestroy {
  historyList: Bet[] = [];
  historyLustSubscription!: Subscription;
  //mock
  team = team1;

  // eslint-disable-next-line no-useless-constructor
  constructor(private repositoryService: DataRepository) {}

  ngOnInit() {
    this.historyLustSubscription = this.repositoryService
      .getMyHistory()
      .subscribe((list) => {
        this.historyList = list;
        console.log(list);
      });
  }

  ngOnDestroy() {
    this.historyLustSubscription.unsubscribe();
  }
}
