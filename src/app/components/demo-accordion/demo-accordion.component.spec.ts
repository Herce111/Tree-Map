import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoAccordionComponent } from './demo-accordion.component';

describe('DemoAccordionComponent', () => {
  let component: DemoAccordionComponent;
  let fixture: ComponentFixture<DemoAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoAccordionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
