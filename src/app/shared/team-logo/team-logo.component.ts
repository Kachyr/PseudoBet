import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-team-logo',
  templateUrl: './team-logo.component.html',
  styleUrls: ['./team-logo.component.css'],
})
export class TeamLogoComponent {
  @Input() name!: string;
  @Input() iconUrl!: string;
  @Input() unchecked = false;
}
