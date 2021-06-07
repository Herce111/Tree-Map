import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoTextareaComponent } from './demo-textarea.component';

describe('DemoTextareaComponent', () => {
  let component: DemoTextareaComponent;
  let fixture: ComponentFixture<DemoTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoTextareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
