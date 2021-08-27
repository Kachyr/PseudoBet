import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MemoryCacheService } from 'src/app/memory-сache/memory-cache.service';

@Component({
  selector: 'app-team-logo',
  templateUrl: './team-logo.component.html',
  styleUrls: ['./team-logo.component.css'],
})
export class TeamLogoComponent implements OnInit, OnDestroy {
  @Input() teamId!: number;
  @Input() name!: string;
  @Input() iconUrl!: string;
  @Input() unchecked = false;

  private cacheSubscription!: Subscription;

  constructor(private cacheService: MemoryCacheService) {}

  ngOnInit() {
    if (this.teamId) {
      this.cacheSubscription = this.cacheService
        .getTeamById(this.teamId)
        .subscribe((team) => {
          if (team) {
            this.iconUrl = team.iconUrl;
            this.name = team.name;
          }
        });
    }
  }

  ngOnDestroy() {
    this.cacheSubscription.unsubscribe();
  }
}
