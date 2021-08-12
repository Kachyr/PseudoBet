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
  private amountMoney = 0;

  onChange: any = (_: any) => {};
  onTouched: any = (_: any) => {};

  constructor() {}

  increment(): void {
    this.amountMoney = this.amountMoney + 10;
  }

  decrement(): void {
    if (this.amountMoney <= 0) return;
    this.amountMoney = this.amountMoney - 10;
  }

  get amount(): number {
    return this.amountMoney;
  }

  set amount(value: number) {
    if (value < 0) this.amountMoney = 0;
    this.amountMoney = value;
    this.onChange(this.amount);
  }

  writeValue(value: number): void {
    this.amountMoney = value;
  }

  registerOnChange(func: (_: any) => void): void {
    this.onChange = func;
  }

  registerOnTouched(func: (_: any) => void): void {
    this.onTouched = func;
  }
}
