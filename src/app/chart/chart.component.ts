import { TimerService } from './../shared/timer/timer.service';
import { Component, OnInit } from '@angular/core';
import { repeat } from 'rxjs/operators';
import { DataRepository } from '../repository/repository.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit {
  timerData?: {
    passed: number;
    left: number;
  };
  lastReq!: number;
  constructor(
    private repo: DataRepository,
    private timerService: TimerService,
  ) {}

  ngOnInit(): void {
    // TODO: implement visualization of data
    this.timerService.runningTimer.subscribe((timerData) => {
      if (timerData.passed % 5 === 0 && timerData.passed > 0) {
        this.repo.getChartData(this.lastReq).subscribe((data) => {
          console.log(data);
        });
        this.lastReq = Date.now();
        console.log(timerData.passed);
      }
    });
  }
}
