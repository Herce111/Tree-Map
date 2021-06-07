import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFieldsetComponent } from './demo-fieldset.component';

describe('DemoFieldsetComponent', () => {
  let component: DemoFieldsetComponent;
  let fixture: ComponentFixture<DemoFieldsetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoFieldsetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoFieldsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
