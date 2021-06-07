import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoCheckboxesComponent } from './demo-checkboxes.component';

describe('DemoCheckboxesComponent', () => {
  let component: DemoCheckboxesComponent;
  let fixture: ComponentFixture<DemoCheckboxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoCheckboxesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoCheckboxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
