import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { team1 } from 'src/app/mocks/teams/teams-mock';
import { DataRepository } from 'src/app/repository/repository.service';
import { Bet } from 'src/app/shared/models/bet.model';
@Component({
  selector: 'app-history-bet',
  templateUrl: './history-bet.component.html',
  styleUrls: ['./history-bet.component.css'],
})
export class HistoryBetComponent implements OnInit, OnDestroy {
  historyList: Bet[] = [];
  historyListSubscription!: Subscription;
  //mock
  team = team1;

  constructor(private repositoryService: DataRepository) {}

  ngOnInit(): void {
    this.historyListSubscription = this.repositoryService
      .getMyHistory()
      .subscribe((list) => {
        this.historyList = list;
      });
  }

  ngOnDestroy(): void {
    this.historyListSubscription.unsubscribe();
  }
}
