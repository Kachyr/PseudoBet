import { SharedModule } from './../shared/shared.module';
import { CoefficientComponent } from './coefficient/coefficient.component';
import { BetButtonComponent } from './bet-button/bet-button.component';
import { DepositAmountComponent } from './deposit-amount/deposit-amount.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterfaceFormComponent } from './interface-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    InterfaceFormComponent,
    CoefficientComponent,
    BetButtonComponent,
    DepositAmountComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, SharedModule],
  exports: [InterfaceFormComponent],
})
export class InterfaceFormModule {}
