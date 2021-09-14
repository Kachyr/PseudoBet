import { GameStatus } from '../shared/enums/game-status.enum';
import { GameManagerService } from './../game-manager/game-manager.service';
import { TimerService } from './../shared/timer/timer.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements OnInit {
  timeData?: Observable<{ passed: number; left: number }>;
  gameStatus?: Observable<GameStatus>;
  statusEnum = GameStatus;

  constructor(
    private timerService: TimerService,
    private gameManager: GameManagerService,
  ) {}

  ngOnInit(): void {
    this.gameStatus = this.gameManager.gameStatus;
    this.timeData = this.timerService.runningTimer;
  }
}
