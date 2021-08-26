import { BetStatus } from 'src/app/shared/enums/bet-status.enum';

export const matchStatus: Record<BetStatus, string> = {
  [BetStatus.Win]: 'Win',
  [BetStatus.Lose]: 'Lose',
  [BetStatus.InProgress]: 'In Progress',
};
