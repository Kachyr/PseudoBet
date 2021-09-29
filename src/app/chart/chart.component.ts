import { TimerService } from './../shared/timer/timer.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataRepository } from '../repository/repository.service';
import { map, switchMap } from 'rxjs/operators';
import { EMPTY, Subscription } from 'rxjs';
import { GameChartData } from '../shared/models/chart.model';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit, OnDestroy {
  /**
   * Value that determines how often request a new chart data
   * @type {number}
   */
  private readonly stepOfChart = 5;
  private timerSub!: Subscription;
  private lastRequestTime!: number;
  private data!: GameChartData[];

  constructor(
    private repo: DataRepository,
    private timerService: TimerService,
  ) {}

  ngOnInit(): void {
    this.lastRequestTime = Date.now();

    this.timerSub = this.timerService.runningTimer
      .pipe(
        map(
          ({ left, passed }) =>
            passed % this.stepOfChart === 0 && passed >= 0 && left >= 0,
        ),
        switchMap((timerIsRunning) =>
          timerIsRunning ? this.repo.getChartData(this.lastRequestTime) : EMPTY,
        ),
      )
      .subscribe((data) => {
        this.lastRequestTime = Date.now();
        this.data.push(...data);
      });
  }

  ngOnDestroy(): void {
    this.timerSub.unsubscribe();
  }
}
