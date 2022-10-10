import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FxtradebookingComponent } from './fxtradebooking.component';

describe('FxtradebookingComponent', () => {
  let component: FxtradebookingComponent;
  let fixture: ComponentFixture<FxtradebookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FxtradebookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FxtradebookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
