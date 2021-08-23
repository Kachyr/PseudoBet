export interface Game {
  firstTeamId: number;
  secondTeamId: number;
  timeLeft: number;
  time: string;
  winnerId: number | null;
}
