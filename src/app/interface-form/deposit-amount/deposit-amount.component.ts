import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-deposit-amount',
  templateUrl: './deposit-amount.component.html',
  styleUrls: ['./deposit-amount.component.css'],
})
export class DepositAmountComponent {
  @Input() deposit = 0;
}
