import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HistoryBetItemComponent } from './history-bet-item.component';

describe('HistoryBetItemComponent', () => {
  let component: HistoryBetItemComponent;
  let fixture: ComponentFixture<HistoryBetItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HistoryBetItemComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryBetItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
