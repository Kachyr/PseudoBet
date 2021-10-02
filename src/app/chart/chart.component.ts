import { TimerService } from './../shared/timer/timer.service';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { DataRepository } from '../repository/repository.service';
import { delay, map, mergeAll, mergeMap, switchMap, tap } from 'rxjs/operators';
import { EMPTY, Subscription } from 'rxjs';
import { ChartDataSets, ChartOptions, ChartPoint, ChartType } from 'chart.js';
import { GameChartData } from '../shared/models/chart.model';
import { BaseChartDirective, Label } from 'ng2-charts';

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

  // @ViewChild(BaseChartDirective) private chart!: BaseChartDirective;

  options: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [
        {
          type: 'time',
          time: {
            unit: 'second',
          },
        },
      ],
    },
    animation: {
      duration: 1000,
    },
  };
  dataset: ChartDataSets[] = [{ data: [] }];
  chartType: ChartType = 'line';
  chartLabels: Label[] = [];

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
        mergeAll(),
        tap(() => {
          this.lastRequestTime = Date.now();
        }),
        delay(1000),
      )
      .subscribe((data) => {
        console.log(data);

        this.pushToDataSet(data);
      });
  }

  private pushToDataSet(element: ChartPoint): void {
    setTimeout(() => {
      this.chartLabels.push(element?.t?.toString() || '');
      this.dataset[0]!.data!.push(element as any);
      if (this.dataset[0]!.data!.length > 20) {
        this.dataset[0]!.data!.splice(0, 4);
      }
    }, 1000);
  }

  ngOnDestroy(): void {
    this.timerSub.unsubscribe();
  }
}
