import { BetStatus } from '../enums/bet-status.enum';
export interface Bet {
  favoriteId: number;
  matchId: number;
  userId: number;
  amountMoney: number;
  time: string;
  status: string;
}
