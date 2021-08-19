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
  private amountMoney!: number;

  onChange: any = (_: any) => {};
  onTouched: any = (_: any) => {};

  increment(): void {
    this.amount += 10;
  }

  decrement(): void {
    if (this.amount <= 0) {
      return;
    }
    this.amount -= 10;
  }

  get amount(): number {
    return this.amountMoney;
  }

  set amount(value: number) {
    if (value < 0) {
      this.amountMoney = 0;
    }
    this.amountMoney = value;
    this.onChange(value);
  }

  writeValue(value: number): void {
    this.amountMoney = value;
  }

  registerOnChange(func: any): void {
    this.onChange = func;
  }

  registerOnTouched(func: any): void {
    this.onTouched = func;
  }
}
