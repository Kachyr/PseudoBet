import { TimerService } from './../shared/timer/timer.service';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, BehaviorSubject } from 'rxjs';
import { DataRepository } from '../repository/repository.service';
import { Game } from '../shared/models/game.model';
import { GameStatus } from '../shared/enums/game-status.enum';

@Injectable({
  providedIn: 'root',
})
export class GameManagerService {
  private currentGame = new ReplaySubject<Game>();
  private isGameStarted = new BehaviorSubject<GameStatus>(
    GameStatus.waitingForNextGame,
  );
  private timerTimeout!: ReturnType<typeof setTimeout>;

  constructor(
    private repo: DataRepository,
    private timerService: TimerService,
  ) {}

  get currentGameObservable(): Observable<Game> {
    return this.currentGame.asObservable();
  }

  get gameStatus(): Observable<GameStatus> {
    return this.isGameStarted.asObservable();
  }

  refreshCurrentGameInfo(): void {
    // subscribing in the expiring of timer
    this.timerService.expiringOfTimer.subscribe((value) => {
      !value || this.isGameStarted.next(GameStatus.finishedGame);
    });
    // start the timer with calculated values;
    this.repo.getCurrentGame().subscribe((game) => {
      const now = Date.now();
      const timePassed = now - game.startAt.getTime();
      const timeToWait = game.startAt.getTime() - now;

      clearTimeout(this.timerTimeout);

      if (game.startAt.getTime() < now) {
        this.isGameStarted.next(GameStatus.startedGame);
        this.timerService.startTimer(game.duration - timePassed);
      } else if (game.startAt.getTime() > now) {
        this.isGameStarted.next(GameStatus.waitingForNextGame);
        this.timerTimeout = setTimeout(() => {
          this.timerService.startTimer(game.duration);
          this.isGameStarted.next(GameStatus.startedGame);
        }, timeToWait);
      } else {
        this.isGameStarted.next(GameStatus.noPlannedGames);
      }
    });
  }
}
