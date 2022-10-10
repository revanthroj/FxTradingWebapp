import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExitConfirmComponent } from './exit-confirm.component';

describe('ExitConfirmComponent', () => {
  let component: ExitConfirmComponent;
  let fixture: ComponentFixture<ExitConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExitConfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExitConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
