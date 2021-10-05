import { MIN_BET } from './../constants';
import { DataRepository } from 'src/app/repository/repository.service';
import { GameManagerService } from './../game-manager/game-manager.service';
import { team1, team2 } from './../mocks/teams/teams-mock';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Team } from '../shared/models/team.model';
import { Bet } from '../shared/models/bet.model';
import { MemoryCacheService } from '../memory-сache/memory-cache.service';
import { Game } from '../shared/models/game.model';
import { tap } from 'rxjs/operators';
import { GameStatus } from '../shared/enums/game-status.enum';
import { BetStatus } from '../shared/enums/bet-status.enum';
import { Subscription } from 'rxjs';

interface BetFormControls {
  teamId: number;
  amountMoney: number;
}
@Component({
  selector: 'app-interface-form',
  templateUrl: './interface-form.component.html',
  styleUrls: ['./interface-form.component.css'],
})
export class InterfaceFormComponent implements OnInit, OnDestroy {
  userDeposit = 300;
  minBet = MIN_BET;
  private currentGameSub!: Subscription;
  private currentGame!: Game;
  team1: Team = team1;
  team2: Team = team2;

  constructor(
    private gameManagerService: GameManagerService,
    private repositoryService: DataRepository,
    private cacheService: MemoryCacheService,
  ) {}

  ngOnInit(): void {
    this.currentGameSub = this.gameManagerService.currentGameObservable
      .pipe(
        tap((game) => {
          this.cacheService
            .getTeamById(game.firstTeamId)
            .subscribe((team) => (team ? (this.team1 = team) : null));
          this.cacheService
            .getTeamById(game.secondTeamId)
            .subscribe((team) => (team ? (this.team2 = team) : null));
        }),
      )
      .subscribe((game) => {
        this.currentGame = game;
      });
  }

  ngOnDestroy(): void {
    this.currentGameSub.unsubscribe();
  }

  betForm = new FormGroup({
    teamId: new FormControl(null, Validators.required),
    amountMoney: new FormControl(null, [
      Validators.required,
      Validators.min(this.minBet),
      Validators.max(this.userDeposit),
    ]),
  });

  onSubmit(): void {
    this.setBet(this.betForm.value);
    console.log(this.betForm);
  }

  private setBet(bet: BetFormControls): void {
    const betProperties: Bet = {
      favoriteId: bet.teamId,
      matchId: this?.currentGame.gameId as number,
      amountMoney: bet.amountMoney,
      time: new Date().toString(),
      status: BetStatus.InProgress,
    };
    this.repositoryService.setBet(betProperties).subscribe();
  }
}
