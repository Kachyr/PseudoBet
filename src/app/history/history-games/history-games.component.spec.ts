/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HistoryGamesComponent } from './history-games.component';

describe('HistoryGamesComponent', () => {
  let component: HistoryGamesComponent;
  let fixture: ComponentFixture<HistoryGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HistoryGamesComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
