import { GameManagerService } from './../game-manager/game-manager.service';
import { TimerService } from './../shared/timer/timer.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements OnInit, OnDestroy {
  timer = 0;
  timerSub!: Subscription;
  gameWillStartSoon = false;

  constructor(
    private timerService: TimerService,
    private gameManager: GameManagerService,
  ) {}

  ngOnInit(): void {
    this.gameWillStartSoon = this.gameManager.gameWillStartSoon;
    this.gameManager.refreshCurrentGameInfo();
    this.timerSub = this.timerService.runningTimer.subscribe((time) => {
      this.timer = time.left;
    });
  }

  ngOnDestroy(): void {
    this.timerSub.unsubscribe();
  }
}
