import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoInputGroupComponent } from './demo-input-group.component';

describe('DemoInputGroupComponent', () => {
  let component: DemoInputGroupComponent;
  let fixture: ComponentFixture<DemoInputGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoInputGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoInputGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
