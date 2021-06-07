import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoStatusComponent } from './demo-status.component';

describe('DemoStatusComponent', () => {
  let component: DemoStatusComponent;
  let fixture: ComponentFixture<DemoStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
