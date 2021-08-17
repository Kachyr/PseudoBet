import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BetButtonComponent } from './bet-button.component';

describe('BetButtonComponent', () => {
  let component: BetButtonComponent;
  let fixture: ComponentFixture<BetButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BetButtonComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
