import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-interface-form',
  templateUrl: './interface-form.component.html',
  styleUrls: ['./interface-form.component.css'],
})
export class InterfaceFormComponent {
  userDeposit = 300;
  minBet = 10;

  betForm = new FormGroup({
    team: new FormControl(null, Validators.required),
    amount: new FormControl(null, [
      Validators.required,
      Validators.min(this.minBet),
      Validators.max(this.userDeposit),
    ]),
  });
}
