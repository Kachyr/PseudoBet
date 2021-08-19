import { BetStatus } from './bet-status.model';

export interface Bet {
  favorite_id: number;
  match_id: number;
  user_id: number;
  amountMoney: number;
  time: number;
  status: BetStatus;
}
