import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoPillComponent } from './demo-pill.component';

describe('DemoPillComponent', () => {
  let component: DemoPillComponent;
  let fixture: ComponentFixture<DemoPillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoPillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoPillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
