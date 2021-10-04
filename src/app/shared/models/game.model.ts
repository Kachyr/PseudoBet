export interface Game {
  gameId: number;
  firstTeamId: number;
  secondTeamId: number;
  duration: number;
  startAt: Date;
  winnerId: number | null;
  timeOfEnd?: Date;
}
