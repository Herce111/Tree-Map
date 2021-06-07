import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionItemModel } from './accordion-item-model';

describe('AccordionItemModel', () => {
  let component: AccordionItemModel;
  let fixture: ComponentFixture<AccordionItemModel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordionItemModel ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionItemModel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
