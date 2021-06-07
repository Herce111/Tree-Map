import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionHeaderModel } from './accordion-header-model';

describe('AccordionHeaderModel', () => {
  let component: AccordionHeaderModel;
  let fixture: ComponentFixture<AccordionHeaderModel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordionHeaderModel ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionHeaderModel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
