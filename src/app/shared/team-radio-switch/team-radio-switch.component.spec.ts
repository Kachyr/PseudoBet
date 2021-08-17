import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TeamRadioSwitchComponent } from './team-radio-switch.component';

describe('TeamRadioSwitchComponent', () => {
  let component: TeamRadioSwitchComponent;
  let fixture: ComponentFixture<TeamRadioSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TeamRadioSwitchComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamRadioSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
