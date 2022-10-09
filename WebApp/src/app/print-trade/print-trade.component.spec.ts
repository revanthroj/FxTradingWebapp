import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintTradeComponent } from './print-trade.component';

describe('PrintTradeComponent', () => {
  let component: PrintTradeComponent;
  let fixture: ComponentFixture<PrintTradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintTradeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintTradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
