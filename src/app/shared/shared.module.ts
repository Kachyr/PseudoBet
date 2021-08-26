import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoneyInputComponent } from './money-input/money-input.component';
import { TeamLogoComponent } from './team-logo/team-logo.component';
import { TeamRadioSwitchComponent } from './team-radio-switch/team-radio-switch.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TeamLogoComponent,
    MoneyInputComponent,
    TeamRadioSwitchComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [TeamLogoComponent, MoneyInputComponent, TeamRadioSwitchComponent],
})
export class SharedModule {}
