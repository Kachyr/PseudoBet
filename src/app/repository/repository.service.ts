import { GameChartData } from './../shared/models/chart.model';
import { Team } from './../shared/models/team.model';
import { Bet } from './../shared/models/bet.model';
import { Game } from './../shared/models/game.model';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import MY_BET_HISTORY from '../mocks/my-bet-history/my-bet-history.json';
import GAMES_HISTORY from '../mocks/games-history/games-history.json';
import TEAMS from '../mocks/teams/teams.json';

@Injectable({
  providedIn: 'root',
})
export class DataRepository {
  /**
   * Last value of chart for chartData generation
   */
  lastChartValue = 0;
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

    return of(dataArr).pipe(delay(500));
  }

  getTeams(): Observable<Team[]> {
    return of(TEAMS).pipe(delay(1000));
  }

  getMyHistory(): Observable<Bet[]> {
    return of(MY_BET_HISTORY).pipe(delay(1000));
  }

  getMyGames(): Observable<Game[]> {
    return of(GAMES_HISTORY).pipe(
      delay(1000),
      map((games) =>
        games.map((game) => ({ ...game, startAt: new Date(game.startAt) })),
      ),
    );
  }

  setBet(amount: number): Observable<null> {
    console.info('setBet with value', amount);
    return of(null).pipe(delay(500));
  }

  getCurrentGame(): Observable<Game> {
    this.lastChartValue = 0;
    // returns the game
    return of(GAMES_HISTORY[0]).pipe(
      delay(500),
      map((game) => {
        return { ...game, startAt: this.generateDate() };
      }),
    );
  }

  private generateDate(): Date {
    // Randomly returns date with 10 sec difference
    const now = Date.now();
    const randomInteger = Math.round(Math.random() * 10);
    const seconds = randomInteger > 5 ? 10000 : -10000;
    return new Date(now - seconds);
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
    return previousValue + vector * (Math.random() / 4);
  }
}
