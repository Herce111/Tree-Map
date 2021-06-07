import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoErrorSummaryComponent } from './demo-error-summary.component';

describe('DemoErrorSummaryComponent', () => {
  let component: DemoErrorSummaryComponent;
  let fixture: ComponentFixture<DemoErrorSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoErrorSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoErrorSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
