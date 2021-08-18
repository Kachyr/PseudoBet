/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HistoryGamesItemComponent } from './history-games-item.component';

describe('HistoryGamesItemComponent', () => {
  let component: HistoryGamesItemComponent;
  let fixture: ComponentFixture<HistoryGamesItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HistoryGamesItemComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryGamesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
