import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoRadiosComponent } from './demo-radios.component';

describe('DemoRadiosComponent', () => {
  let component: DemoRadiosComponent;
  let fixture: ComponentFixture<DemoRadiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoRadiosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoRadiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
