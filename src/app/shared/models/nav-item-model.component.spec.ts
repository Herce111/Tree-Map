import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavItemModelComponent } from './nav-item-model.component';

describe('NavItemModelComponent', () => {
  let component: NavItemModelComponent;
  let fixture: ComponentFixture<NavItemModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavItemModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavItemModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
