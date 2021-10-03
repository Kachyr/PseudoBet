import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  ChartDataSets,
  ChartOptions,
  ChartPoint,
  ChartType,
  ChartYAxe,
} from 'chart.js';
import { Label } from 'ng2-charts';
import { EMPTY, from, of, Subscription } from 'rxjs';
import {
  bufferCount,
  concatMap,
  debounceTime,
  delay,
  flatMap,
  map,
  mergeAll,
  mergeMap,
  switchMap,
  tap,
} from 'rxjs/operators';
import { DataRepository } from '../repository/repository.service';
import { TimerService } from './../shared/timer/timer.service';

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
    maintainAspectRatio: false,
    title: {
      display: true,
      text: 'Win probability',
    },
    legend: {
      display: false,
    },
    scales: {
      yAxes: [
        {
          display: true,
          ticks: {
            suggestedMax: 100,
            suggestedMin: -100,
            stepSize: 25,
            callback: function (label, index, labels) {
              return label + '%';
            },
          },
        } as ChartYAxe,
      ],
      xAxes: [
        {
          type: 'time',
          time: {
            unit: 'second',
            unitStepSize: 60,
          },
        },
      ],
    },
    responsiveAnimationDuration: 1000,
    animation: {
      animateRotate: true,
      duration: 1000,
      easing: 'linear',
    },
  };
  dataset: ChartDataSets[] = [
    {
      data: [],
      lineTension: 0,
      backgroundColor: (ctx) => {
        const context = ctx.chart?.canvas?.getContext('2d');
        if (!context) {
          return 'transparent';
        }
        const height = ctx.chart!.height ?? 0;

        const gradientFill = context.createLinearGradient(0, height, 0, 0);
        gradientFill.addColorStop(0, 'transparent');
        gradientFill.addColorStop(0.4, 'transparent');
        gradientFill.addColorStop(1, '#FFE600');

        return gradientFill;
      },
      pointBackgroundColor: 'transparent',
      pointBorderColor: 'transparent',
      pointHoverBorderColor: '#FFE600',
      borderWidth: 1,
      borderColor: '#FFE600',
      label: 'Win rate',
    },
  ];
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
        map(({ left, passed }) => ({
          isWaiting: passed == 0,
          timerIsRunning: passed > 0 && left > 0,
          isFinished: left == 0,
        })),
        switchMap(({ timerIsRunning }) =>
          timerIsRunning ? this.repo.getChartData(this.lastRequestTime) : EMPTY,
        ),
        tap(() => (this.lastRequestTime = Date.now())),
        mergeAll(),
        concatMap((i) => of(i).pipe(delay(1000))),
      )
      .subscribe((data) => {
        this.pushToDataSet(data);
      });
  }

  private pushToDataSet(element: ChartPoint): void {
    this.chartLabels.push(element?.t?.toString() || '');
    this.dataset[0]!.data!.push({
      t: element.t,
      y: (element.y as any) * 100,
    } as any);
  }

  ngOnDestroy(): void {
    this.timerSub.unsubscribe();
  }
}
