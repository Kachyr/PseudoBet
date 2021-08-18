/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HistoryBetComponent } from './history-bet.component';

describe('HistoryBetComponent', () => {
  let component: HistoryBetComponent;
  let fixture: ComponentFixture<HistoryBetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HistoryBetComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryBetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
