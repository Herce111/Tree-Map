import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputBooleanComponent } from './input-boolean.component';

describe('InputBooleanComponent', () => {
  let component: InputBooleanComponent;
  let fixture: ComponentFixture<InputBooleanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputBooleanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputBooleanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
