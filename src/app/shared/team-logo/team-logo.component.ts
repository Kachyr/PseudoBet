import { Team } from './../models/team.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-logo',
  templateUrl: './team-logo.component.html',
  styleUrls: ['./team-logo.component.css'],
})
export class TeamLogoComponent {
  @Input() name!: string;
  @Input() iconUrl!: string;
  @Input() isUnchecked = false;
}
