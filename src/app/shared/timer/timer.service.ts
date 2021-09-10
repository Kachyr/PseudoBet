import { interval, Observable, ReplaySubject, Subscription } from 'rxjs';
import { Injectable } from '@angular/core';
import { takeWhile } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TimerService {
  private time = new ReplaySubject<{ passed: number; left: number }>();
  private currentTimer!: Subscription;

  get runningTimer(): Observable<{ passed: number; left: number }> {
    return this.time;
  }

  startTimer(duration: number): void {
    // Stop previous timer
    const seconds = Math.round(duration / 1000);
    this.currentTimer?.unsubscribe();
    // Start new
    this.currentTimer = this.initTimer(seconds).subscribe((i) =>
      this.time.next({ passed: i, left: seconds - i }),
    );
  }

  private initTimer(duration: number): Observable<number> {
    return interval(1000).pipe(takeWhile((x) => x <= duration));
  }
}
