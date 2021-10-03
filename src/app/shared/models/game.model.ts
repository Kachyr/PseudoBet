export interface Game {
  firstTeamId: number;
  secondTeamId: number;
  duration: number;
  startAt: Date;
  winnerId: number | null;
  timeOfEnd?: Date;
}
