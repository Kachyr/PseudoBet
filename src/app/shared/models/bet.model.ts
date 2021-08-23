import { BetStatus } from './bet-status.model';

export interface Bet {
  favoriteId: number;
  matchId: number;
  userId: number;
  amountMoney: number;
  time: number;
  status: BetStatus;
}
