import { team1, team2 } from './../mocks/teams-mock/teams-mock';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TeamI } from '../shared/team-radio-switch/team-radio-switch.model';

@Component({
  selector: 'app-interface-form',
  templateUrl: './interface-form.component.html',
  styleUrls: ['./interface-form.component.css'],
})
export class InterfaceFormComponent {
  userDeposit = 300;
  minBet = 10;
  // mocked teams
  team1: TeamI = team1;
  team2: TeamI = team2;

  betForm = new FormGroup({
    teamId: new FormControl(null, Validators.required),
    amount: new FormControl(null, [
      Validators.required,
      Validators.min(this.minBet),
      Validators.max(this.userDeposit),
    ]),
  });
}
