import { Team } from './../models/team.model';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { MemoryCacheService } from 'src/app/memory-сache/memory-cache.service';

@Component({
  selector: 'app-team-logo',
  templateUrl: './team-logo.component.html',
  styleUrls: ['./team-logo.component.css'],
})
export class TeamLogoComponent implements OnInit, OnDestroy {
  @Input() teamId: number = 111;
  @Input() unchecked = false;
  team: Team | null = null;

  private cacheSubscription!: Subscription;

  constructor(private cacheService: MemoryCacheService) {}

  ngOnInit() {
    this.cacheSubscription = this.cacheService
      .getTeamById(this.teamId)
      .pipe(filter((item) => item !== null))
      .subscribe((team) => {
        this.team = team;
      });
  }

  ngOnDestroy() {
    this.cacheSubscription.unsubscribe();
  }
}
