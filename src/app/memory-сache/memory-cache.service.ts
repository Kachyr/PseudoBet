import { Team } from './../shared/models/team.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { DataRepository } from '../repository/repository.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MemoryCacheService {
  teams = new BehaviorSubject<Team[]>([]);

  constructor(private repo: DataRepository) {
    this.refreshCache();
  }

  refreshCache() {
    this.repo.getTeams().subscribe((data) => {
      this.teams.next(data);
    });
  }

  getTeamById(id: number): Observable<Team | null> {
    return this.teams
      .asObservable()
      .pipe(map((teams) => teams.find((i) => i.id === id) || null));
  }
}
