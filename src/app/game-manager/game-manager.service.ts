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
  timerTimeout!: ReturnType<typeof setTimeout>;
  gameWillStartSoon = false;
  gameIsStarted = false;

  constructor(
    private repo: DataRepository,
    private timerService: TimerService,
  ) {}

  get currentGameObservable(): Observable<Game> {
    return this.currentGame.asObservable();
  }

  refreshCurrentGameInfo(): void {
    // start the timer with calculated values;
    this.repo.getCurrentGame().subscribe((game) => {
      const now = Date.now();
      const timePassed = now - game.startAt.getTime();
      const timeToWait = game.startAt.getTime() - now;

      this.gameIsStarted = game.startAt.getTime() < now;
      this.gameWillStartSoon = game.startAt.getTime() > now;

      clearTimeout(this.timerTimeout);

      if (this.gameIsStarted) {
        this.timerService.startTimer(game.duration - timePassed);
      } else if (this.gameWillStartSoon) {
        this.timerTimeout = setTimeout(() => {
          this.timerService.startTimer(game.duration);
        }, timeToWait);
      }
    });
  }
}
