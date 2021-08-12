import { team1, team2 } from './../mocks/teams-mock/teams-mock';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Team } from '../shared/team-radio-switch/team-radio-switch.model';

@Component({
  selector: 'app-interface-form',
  templateUrl: './interface-form.component.html',
  styleUrls: ['./interface-form.component.css'],
})
export class InterfaceFormComponent implements OnInit {
  betForm!: FormGroup;
  stock: number = 300;
  minBet: number = 10;
  // mocked teams
  team1: Team = team1;
  team2: Team = team2;

  constructor() {}

  ngOnInit() {
    this.betForm = new FormGroup({
      teamId: new FormControl(null, Validators.required),
      amount: new FormControl(0, [
        Validators.required,
        Validators.max(this.stock),
        Validators.min(this.minBet),
      ]),
    });
  }

  onSubmit(values: FormGroup) {
    console.log(values);
  }
}
