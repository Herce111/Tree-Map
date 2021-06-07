import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoNotificationComponent } from './demo-notification.component';

describe('DemoNotificationComponent', () => {
  let component: DemoNotificationComponent;
  let fixture: ComponentFixture<DemoNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoNotificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
