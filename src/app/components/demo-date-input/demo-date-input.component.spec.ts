import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDateInputComponent } from './demo-date-input.component';

describe('DemoDateInputComponent', () => {
  let component: DemoDateInputComponent;
  let fixture: ComponentFixture<DemoDateInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoDateInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoDateInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
