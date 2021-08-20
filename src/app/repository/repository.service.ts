import { Team } from './../shared/models/team.model';
import { Bet } from './../shared/models/bet.model';
import { Game } from './../shared/models/game.model';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import * as MY_BET_HISTORY from '../mocks/my-bet-history/my-bet-history.json';
import * as GAMES_HISTORY from '../mocks/games-history/games-history.json';
import * as TEAMS from '../mocks/teams/teams.json';

@Injectable({
  providedIn: 'root',
})
export class DataRepository {
  getTeams(): Observable<Team[]> {
    return of(TEAMS).pipe(delay(1000));
  }

  getMyHistory(): Observable<Bet[]> {
    return of(MY_BET_HISTORY).pipe(delay(1000));
  }

  getMyGames(): Observable<Game[]> {
    return of(GAMES_HISTORY).pipe(delay(1000));
  }

  setBet(amount: number): Observable<null> {
    console.info('setBet with value', amount);
    return of(null).pipe(delay(500));
  }
}
