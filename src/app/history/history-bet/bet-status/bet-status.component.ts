import { iconInProgress, iconsPath } from './constant-icons';
import { Component, Input } from '@angular/core';
import { BetStatus } from 'src/app/shared/enums/bet-status.enum';
import { matchStatus } from './constant-match-status';

@Component({
  selector: 'app-bet-status',
  templateUrl: './bet-status.component.html',
  styleUrls: ['./bet-status.component.css'],
})
export class BetStatusComponent {
  private status = matchStatus[BetStatus.InProgress];
  icon = iconInProgress;

  @Input()
  get betStatus(): string {
    return this.status;
  }
  set betStatus(value: string) {
    this.status = matchStatus[<BetStatus>value];
    this.icon = iconsPath[<BetStatus>value] || iconsPath[BetStatus.InProgress];
  }
}
