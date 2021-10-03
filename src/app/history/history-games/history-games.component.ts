import { map } from 'rxjs/operators';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Game } from 'src/app/shared/models/game.model';
import { Subscription } from 'rxjs';
import { DataRepository } from 'src/app/repository/repository.service';

interface ExtendedGameI extends Game {
  timeOfEnd: Date;
}

@Component({
  selector: 'app-history-games',
  templateUrl: './history-games.component.html',
  styleUrls: ['./history-games.component.css'],
})
export class HistoryGamesComponent implements OnInit, OnDestroy {
  private gamesSubscription!: Subscription;
  gamesList: ExtendedGameI[] = [];

  constructor(private repositoryService: DataRepository) {}

  ngOnInit(): void {
    this.gamesSubscription = this.repositoryService
      .getMyGames()
      .pipe(
        map((listGames) =>
          listGames.map((game) => ({
            ...game,
            timeOfEnd: new Date(game.startAt.getTime() + game.duration),
          })),
        ),
      )
      .subscribe((games) => {
        this.gamesList = games;
      });
  }

  ngOnDestroy(): void {
    this.gamesSubscription.unsubscribe();
  }
}
