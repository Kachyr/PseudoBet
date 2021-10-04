import { GameManagerService } from './../../game-manager/game-manager.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Game } from 'src/app/shared/models/game.model';
import { Subscription, EMPTY } from 'rxjs';
import { DataRepository } from 'src/app/repository/repository.service';
import { switchMap } from 'rxjs/operators';
import { GameStatus } from 'src/app/shared/enums/game-status.enum';

@Component({
  selector: 'app-history-games',
  templateUrl: './history-games.component.html',
  styleUrls: ['./history-games.component.css'],
})
export class HistoryGamesComponent implements OnInit, OnDestroy {
  private gamesSubscription!: Subscription;
  gamesList: Game[] = [];
  statusSub!: Subscription;

  constructor(
    private repositoryService: DataRepository,
    private gameService: GameManagerService,
  ) {}

  ngOnInit(): void {
    this.statusSub = this.gameService.gameStatus
      .pipe(
        switchMap((status) => {
          return status === GameStatus.finishedGame || !this.gamesList.length
            ? this.repositoryService.getMyGames()
            : EMPTY;
        }),
      )
      .subscribe((games) => {
        this.gamesList = games;
      });
  }

  ngOnDestroy(): void {
    this.gamesSubscription.unsubscribe();
    this.statusSub.unsubscribe();
  }
}
