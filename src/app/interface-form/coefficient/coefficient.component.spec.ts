import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CoefficientComponent } from './coefficient.component';

describe('CoefficientComponent', () => {
  let component: CoefficientComponent;
  let fixture: ComponentFixture<CoefficientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CoefficientComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoefficientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
