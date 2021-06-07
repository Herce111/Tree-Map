import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoErrorMessageComponent } from './demo-error-message.component';

describe('DemoErrorMessageComponent', () => {
  let component: DemoErrorMessageComponent;
  let fixture: ComponentFixture<DemoErrorMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoErrorMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoErrorMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
