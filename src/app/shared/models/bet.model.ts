import { BetStatus } from '../enums/bet-status.enum';

export interface Bet {
  bet_id: number;
  favorite_id: number;
  match_id: number;
  amountMoney: number;
  time: string;
  status: string;
}
