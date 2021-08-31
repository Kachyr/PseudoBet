import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements OnInit, OnDestroy {
  time = 10;
  display = '0:00';
  interval!: ReturnType<typeof setInterval>;

  startTimer(): void {
    this.interval = setInterval(() => {
      if (this.time > 0) {
        this.time--;
      } else {
        clearInterval(this.interval);
      }
      this.display = this.transform(this.time);
    }, 1000);
  }

  transform(time: number): string {
    const minutes = Math.round((time % 3600) / 60);
    const seconds = Math.round(time % 60).toString();

    return `${minutes}:${seconds.padStart(2, '0')}`;
  }

  ngOnInit(): void {
    this.startTimer();
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
