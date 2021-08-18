import { iconWin, iconLose, iconInProgress } from './constant-icons';
import { Component, Input } from '@angular/core';
import { BetStatus } from './bet-status.model';

@Component({
  selector: 'app-bet-status',
  templateUrl: './bet-status.component.html',
  styleUrls: ['./bet-status.component.css'],
})
export class BetStatusComponent {
  private status: BetStatus = BetStatus['In Progress'];
  icon = iconInProgress;

  @Input()
  get betStatus(): BetStatus {
    return this.status;
  }
  set betStatus(value: BetStatus) {
    this.status = value;
    this.onIconChange(value);
  }

  onIconChange(status: BetStatus): void {
    switch (status) {
      case BetStatus['Win']:
        this.icon = iconWin;
        break;
      case BetStatus['Lose']:
        this.icon = iconLose;
        break;
      case BetStatus['In Progress']:
        this.icon = iconInProgress;
        break;
      default:
        this.icon = iconInProgress;
        break;
    }
  }
}
