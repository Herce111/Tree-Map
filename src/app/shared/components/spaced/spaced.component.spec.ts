import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacedComponent } from './spaced.component';

describe('SpacedComponent', () => {
  let component: SpacedComponent;
  let fixture: ComponentFixture<SpacedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpacedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
