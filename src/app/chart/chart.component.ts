import { TimerService } from './../shared/timer/timer.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataRepository } from '../repository/repository.service';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { GameChartData } from '../shared/models/chart.model';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit, OnDestroy {
  timerSub!: Subscription;
  lastRequestTime!: number;
  chartData?: GameChartData[];
  stepOfChart = 5;

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
      )
      .subscribe((timerIsRunning) => {
        if (timerIsRunning) {
          this.repo.getChartData(this.lastRequestTime).subscribe((data) => {
            this.chartData = data;
          });
          this.lastRequestTime = Date.now();
        }
      });
  }

  ngOnDestroy(): void {
    this.timerSub.unsubscribe();
  }
}
