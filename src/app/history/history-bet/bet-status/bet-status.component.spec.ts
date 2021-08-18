/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BetStatusComponent } from './bet-status.component';

describe('BetStatusComponent', () => {
  let component: BetStatusComponent;
  let fixture: ComponentFixture<BetStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BetStatusComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
