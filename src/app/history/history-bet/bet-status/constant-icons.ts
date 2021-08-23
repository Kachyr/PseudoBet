import { BetStatus } from 'src/app/shared/models/bet-status.model';
export const iconWin = 'assets/images/bet-status/win.svg';
export const iconLose = 'assets/images/bet-status/lose.svg';
export const iconInProgress = 'assets/images/bet-status/in-progress.svg';

export const iconsPath: Record<BetStatus, string> = {
  [BetStatus.Win]: iconWin,
  [BetStatus.Lose]: iconLose,
  [BetStatus.InProgress]: iconInProgress,
};
