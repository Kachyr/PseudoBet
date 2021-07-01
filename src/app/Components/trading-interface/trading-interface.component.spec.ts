import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingInterfaceComponent } from './trading-interface.component';

describe('TradingInterfaceComponent', () => {
  let component: TradingInterfaceComponent;
  let fixture: ComponentFixture<TradingInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradingInterfaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradingInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
