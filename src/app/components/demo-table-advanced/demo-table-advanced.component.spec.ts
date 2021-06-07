import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoTableAdvancedComponent } from './demo-table-advanced.component';

describe('DemoTableAdvancedComponent', () => {
  let component: DemoTableAdvancedComponent;
  let fixture: ComponentFixture<DemoTableAdvancedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoTableAdvancedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoTableAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
