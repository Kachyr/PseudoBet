import { TimerService } from './../shared/timer/timer.service';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { DataRepository } from '../repository/repository.service';
import { Game } from '../shared/models/game.model';

@Injectable({
  providedIn: 'root',
})
export class GameManagerService {
  private currentGame = new ReplaySubject<Game>();
  private isGameStarted = new ReplaySubject<boolean>();
  private timerTimeout!: ReturnType<typeof setTimeout>;

  constructor(
    private repo: DataRepository,
    private timerService: TimerService,
  ) {}

  get currentGameObservable(): Observable<Game> {
    return this.currentGame.asObservable();
  }

  get gameStatus(): Observable<boolean> {
    return this.isGameStarted.asObservable();
  }

  refreshCurrentGameInfo(): void {
    // start the timer with calculated values;
    this.repo.getCurrentGame().subscribe((game) => {
      const now = Date.now();
      const timePassed = now - game.startAt.getTime();
      const timeToWait = game.startAt.getTime() - now;

      this.isGameStarted.next(game.startAt.getTime() < now);

      clearTimeout(this.timerTimeout);

      if (game.startAt.getTime() < now) {
        this.timerService.startTimer(game.duration - timePassed);
      } else {
        this.timerTimeout = setTimeout(() => {
          this.timerService.startTimer(game.duration);
          this.isGameStarted.next(game.startAt.getTime() > now);
        }, timeToWait);
      }
    });
  }
}
