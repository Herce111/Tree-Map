import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoStatusItemComponent } from './demo-status-item.component';

describe('DemoStatusItemComponent', () => {
  let component: DemoStatusItemComponent;
  let fixture: ComponentFixture<DemoStatusItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoStatusItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoStatusItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
