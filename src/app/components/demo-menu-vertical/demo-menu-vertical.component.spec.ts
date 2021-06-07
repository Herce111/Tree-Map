import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoMenuVerticalComponent } from './demo-menu-vertical.component';

describe('DemoMenuVerticalComponent', () => {
  let component: DemoMenuVerticalComponent;
  let fixture: ComponentFixture<DemoMenuVerticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoMenuVerticalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoMenuVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
