import { GameManagerService } from './../../game-manager/game-manager.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { EMPTY, Subscription } from 'rxjs';
import { DataRepository } from 'src/app/repository/repository.service';
import { Bet } from 'src/app/shared/models/bet.model';
import { switchMap } from 'rxjs/operators';
import { GameStatus } from 'src/app/shared/enums/game-status.enum';
@Component({
  selector: 'app-history-bet',
  templateUrl: './history-bet.component.html',
  styleUrls: ['./history-bet.component.css'],
})
export class HistoryBetComponent implements OnInit, OnDestroy {
  historyList: Bet[] = [];
  private historyListSubscription!: Subscription;
  private statusSub!: Subscription;

  constructor(
    private repositoryService: DataRepository,
    private gameService: GameManagerService,
  ) {}

  ngOnInit(): void {
    this.statusSub = this.gameService.gameStatus
      .pipe(
        switchMap((status) => {
          return status === GameStatus.finishedGame || !this.historyList.length
            ? this.repositoryService.getMyHistory()
            : EMPTY;
        }),
      )
      .subscribe((games) => {
        this.historyList = games;
      });
  }

  ngOnDestroy(): void {
    this.historyListSubscription.unsubscribe();
    this.statusSub.unsubscribe();
  }
}
