import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Team as Team } from './team-radio-switch.model';

@Component({
  selector: 'app-team-radio-switch',
  templateUrl: './team-radio-switch.component.html',
  styleUrls: ['./team-radio-switch.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TeamRadioSwitchComponent),
      multi: true,
    },
  ],
})
export class TeamRadioSwitchComponent implements ControlValueAccessor {
  @Input() team1!: Team;
  @Input() team2!: Team;

  onChange: any = () => {};
  onTouched: any = () => {};

  private teamId = 0;

  get valueId(): number {
    return this.teamId;
  }

  set valueId(value: number) {
    this.teamId = value;
    this.onChange(value);
  }

  writeValue(value: any): void {
    this.valueId = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
