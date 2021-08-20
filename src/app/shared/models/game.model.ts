export interface Game {
  firstTeam_id: number;
  secondTeam_id: number;
  timeLeft: number;
  time: string;
  winner_id: number | null;
}
