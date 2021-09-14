import {
  BehaviorSubject,
  interval,
  Observable,
  ReplaySubject,
  Subscription,
} from 'rxjs';
import { Injectable } from '@angular/core';
import { takeWhile } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TimerService {
  private time = new BehaviorSubject<{ passed: number; left: number }>({
    passed: 0,
    left: 300,
  });
  private isTimerExpired = new BehaviorSubject<boolean>(false);
  private currentTimer!: Subscription;
  readonly oneSecond = 1000;

  get runningTimer(): Observable<{ passed: number; left: number }> {
    return this.time;
  }

  get expiringOfTimer(): Observable<boolean> {
    return this.isTimerExpired.asObservable();
  }

  startTimer(duration: number): void {
    // Stop previous timer
    const seconds = Math.round(duration / this.oneSecond);
    this.currentTimer?.unsubscribe();
    // Clear expire status
    this.isTimerExpired.next(false);
    // Start new
    this.currentTimer = this.initTimer(seconds).subscribe({
      next: (i) => {
        this.time.next({ passed: i, left: seconds - i });
      },
      complete: () => {
        this.isTimerExpired.next(true);
      },
    });
  }

  private initTimer(duration: number): Observable<number> {
    return interval(this.oneSecond).pipe(takeWhile((x) => x <= duration));
  }
}
