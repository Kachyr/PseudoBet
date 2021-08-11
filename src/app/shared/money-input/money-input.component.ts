import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component, forwardRef } from '@angular/core';

@Component({
  selector: 'app-money-input',
  templateUrl: './money-input.component.html',
  styleUrls: ['./money-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MoneyInputComponent),
      multi: true,
    },
  ],
})
export class MoneyInputComponent implements ControlValueAccessor {
  private _amount: number = 0;

  onChange: any = () => {};
  onTouched: any = () => {};

  constructor() {}

  increment(): void {
    this.amount = this.amount + 10;
  }

  decrement(): void {
    if (this.amount <= 0) return;
    this.amount = this.amount - 10;
  }

  public get amount(): number {
    return this._amount;
  }

  public set amount(value: number) {
    this._amount = value;
    console.log(this.amount);
    this.onChange(this._amount);
  }

  writeValue(value: number): void {
    this.amount = value;
  }

  registerOnChange(func: any): void {
    this.onChange = func;
  }

  registerOnTouched(func: any): void {
    this.onTouched = func;
  }
}
