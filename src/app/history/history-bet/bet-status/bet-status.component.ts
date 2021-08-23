import { iconInProgress, iconsPath } from './constant-icons';
import { Component, Input } from '@angular/core';
import { BetStatus } from 'src/app/shared/models/bet-status.model';

@Component({
  selector: 'app-bet-status',
  templateUrl: './bet-status.component.html',
  styleUrls: ['./bet-status.component.css'],
})
export class BetStatusComponent {
  private status: BetStatus = BetStatus.InProgress;
  icon = iconInProgress;

  @Input()
  get betStatus(): BetStatus {
    return this.status;
  }
  set betStatus(value: BetStatus) {
    this.status = value;
    this.icon = iconsPath[value] || iconsPath[BetStatus.InProgress];
  }
}
