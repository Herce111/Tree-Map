import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoHintComponent } from './demo-hint.component';

describe('DemoHintComponent', () => {
  let component: DemoHintComponent;
  let fixture: ComponentFixture<DemoHintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoHintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoHintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
