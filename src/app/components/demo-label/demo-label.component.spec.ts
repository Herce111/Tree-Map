import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoLabelComponent } from './demo-label.component';

describe('DemoLabelComponent', () => {
  let component: DemoLabelComponent;
  let fixture: ComponentFixture<DemoLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoLabelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
