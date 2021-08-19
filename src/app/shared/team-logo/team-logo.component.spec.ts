/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TeamLogoComponent } from './team-logo.component';

describe('TeamLogoComponent', () => {
  let component: TeamLogoComponent;
  let fixture: ComponentFixture<TeamLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TeamLogoComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
