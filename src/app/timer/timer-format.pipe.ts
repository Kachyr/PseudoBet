import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timerFormat',
})
export class TimerFormat implements PipeTransform {
  /**
   * @param value The value is expected to be passed in seconds..
   */
  transform(value: number): string {
    const minutes = Math.floor(value / 60);
    const seconds = (value - minutes * 60).toString();

    return `${minutes}:${seconds.padStart(2, '0')}`;
  }
}
