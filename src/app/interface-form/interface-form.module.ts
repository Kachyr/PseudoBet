import { CoefficientComponent } from './coefficient/coefficient.component';
import { BetButtonComponent } from './bet-button/bet-button.component';
import { TeamRadioSwitchComponent } from './../shared/team-radio-switch/team-radio-switch.component';
import { DepositAmountComponent } from './deposit-amount/deposit-amount.component';
import { MoneyInputComponent } from './../shared/money-input/money-input.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterfaceFormComponent } from './interface-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    InterfaceFormComponent,
    MoneyInputComponent,
    CoefficientComponent,
    BetButtonComponent,
    TeamRadioSwitchComponent,
    DepositAmountComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [InterfaceFormComponent],
})
export class InterfaceFormModule {}
