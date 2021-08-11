import { Component, Input, OnInit } from '@angular/core';
import { Team } from './team-radio-switch.model';

@Component({
  selector: 'app-team-radio-switch',
  templateUrl: './team-radio-switch.component.html',
  styleUrls: ['./team-radio-switch.component.css'],
})
export class TeamRadioSwitchComponent implements OnInit {
  @Input() team1!: Team;
  @Input() team2!: Team;

  constructor() {}

  ngOnInit() {}
}
