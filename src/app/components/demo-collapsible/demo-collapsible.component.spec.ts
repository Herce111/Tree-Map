import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoCollapsibleComponent } from './demo-collapsible.component';

describe('DemoCollapsibleComponent', () => {
  let component: DemoCollapsibleComponent;
  let fixture: ComponentFixture<DemoCollapsibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoCollapsibleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoCollapsibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
