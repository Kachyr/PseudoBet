import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-interface-form',
  templateUrl: './interface-form.component.html',
  styleUrls: ['./interface-form.component.css'],
})
export class InterfaceFormComponent implements OnInit {
  betForm!: FormGroup;
  stock: number = 300;
  minBet: number = 10;

  constructor() {}

  ngOnInit() {
    this.betForm = new FormGroup({
      team: new FormControl(null, Validators.required),
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
