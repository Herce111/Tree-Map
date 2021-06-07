import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessibilityInputsComponent } from './accessibility-inputs.component';

describe('AccessibilityInputsComponent', () => {
  let component: AccessibilityInputsComponent;
  let fixture: ComponentFixture<AccessibilityInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessibilityInputsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessibilityInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
