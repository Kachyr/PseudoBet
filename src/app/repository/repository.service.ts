import { GameChartData } from './../shared/models/chart.model';
import { Team } from './../shared/models/team.model';
import { Bet } from './../shared/models/bet.model';
import { Game } from './../shared/models/game.model';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import MY_BET_HISTORY from '../mocks/my-bet-history/my-bet-history.json';
import GAMES_HISTORY from '../mocks/games-history/games-history.json';
import CURRENT_GAME from '../mocks/current-game/current-game.json';
import TEAMS from '../mocks/teams/teams.json';
import {
  EVERY_MINUTE_WHEN_GAME_STARTS,
  GAME_DURATION_IN_MINUTES,
} from '../constants';
import { BetStatus } from '../shared/enums/bet-status.enum';

@Injectable({
  providedIn: 'root',
})
export class DataRepository {
  private betHistory: Bet[] = MY_BET_HISTORY;
  private gamesHistory: any = GAMES_HISTORY;
  /**
   * Last value of chart for chartData generation
   */
  private lastChartValue = 0;
  private myDeposit = 300;

  get repoLastChartValue(): number {
    return this.lastChartValue;
  }

  /**
   * Method will return array with data for chart,
   * number of elements depends depends on difference last request time and current moment
   * @param lastRequestDateTime time of last request in millisecond format
   * @returns Observable with array of chart data objects
   */
  getChartData(lastRequestDateTime: number): Observable<GameChartData[]> {
    const dataArr: GameChartData[] = [];
    const now = Date.now();

    const timeDifferenceInSeconds = Math.round(
      (now - lastRequestDateTime) / 1000,
    );

    //generate objects for chart for each seconds of time difference
    for (let i = 0; i < timeDifferenceInSeconds; i++) {
      dataArr.push(this.generateChartObject(lastRequestDateTime, i));
    }

    // TODO: in real app, there will be delay, but for demo it is ignored
    // return of(dataArr).pipe(delay(500));
    return of(dataArr);
  }

  getTeams(): Observable<Team[]> {
    return of(TEAMS).pipe(delay(1000));
  }

  getMyHistory(): Observable<Bet[]> {
    return of(MY_BET_HISTORY).pipe(delay(1000));
  }

  addGame(game: Game): void {
    const parsedStartAt = game.startAt.toJSON();
    this.gamesHistory.unshift({ ...game, startAt: parsedStartAt });
    if (
      game.gameId === this.betHistory[0].matchId &&
      game.winnerId === this.betHistory[0].favoriteId
    ) {
      this.betHistory[0].status = BetStatus.Win;
      this.myDeposit += this.betHistory[0].amountMoney * 2;
    }
    if (
      game.gameId === this.betHistory[0].matchId &&
      game.winnerId !== this.betHistory[0].favoriteId
    ) {
      this.betHistory[0].status = BetStatus.Lose;
    }
    if (this.gamesHistory.length > 8) {
      this.gamesHistory.splice(-2);
    }
  }

  getMyGames(): Observable<Game[]> {
    return of(this.gamesHistory).pipe(
      delay(1000),
      map((listGames) =>
        listGames.map((game: Game) => {
          const dateTime = new Date(game.startAt);
          return {
            ...game,
            startAt: dateTime,
            timeOfEnd: new Date(dateTime.getTime() + game.duration),
          };
        }),
      ),
    );
  }

  setBet(betData: Bet): Observable<null> {
    this.betHistory.unshift(betData);
    this.myDeposit -= betData.amountMoney;
    console.info('setBet with value', betData);
    return of(null).pipe(delay(500));
  }

  getBet(): Observable<Bet> {
    return of(this.betHistory[0]).pipe(delay(500));
  }

  /**
   * @returns amount of user deposit
   */
  getDeposit(): Observable<number> {
    return of(this.myDeposit).pipe(delay(500));
  }

  getCurrentGame(): Observable<Game> {
    this.lastChartValue = 0;
    // returns the game
    return of(CURRENT_GAME).pipe(
      delay(500),
      map((game) => {
        return {
          ...game,
          gameId: this.gamesHistory.length + 1,
          duration: GAME_DURATION_IN_MINUTES * 60 * 1000,
          startAt: generateGameStartDateTime(),
        };
      }),
    );
  }

  private generateChartObject(
    lastRequestTime: number,
    increment: number,
  ): GameChartData {
    const incrementedTime = lastRequestTime + increment * 1000;
    const randomValue = this.shouldIncreaseOrDecrease(this.lastChartValue);
    this.lastChartValue = randomValue;
    return { t: new Date(incrementedTime), y: randomValue };
  }

  private shouldIncreaseOrDecrease(previousValue: number): number {
    const vector = Math.random() > 0.5 ? 1 : -1;
    const result = previousValue + vector * (Math.random() / 30);
    return Math.max(-1, Math.min(1, result));
  }
}

/**
 * Game starts every 10 minute, game lasts 5 minutes
 */
export function generateGameStartDateTime(): Date {
  const now = new Date();

  let m = now.getMinutes();
  const mod = m % EVERY_MINUTE_WHEN_GAME_STARTS;
  m =
    mod < GAME_DURATION_IN_MINUTES
      ? m - mod
      : m + (EVERY_MINUTE_WHEN_GAME_STARTS - mod);

  return new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    now.getHours(),
    m,
    0,
  );
}
