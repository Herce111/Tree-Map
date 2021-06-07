import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoMenuHorizontalComponent } from './demo-menu-horizontal.component';

describe('DemoMenuHorizontalComponent', () => {
  let component: DemoMenuHorizontalComponent;
  let fixture: ComponentFixture<DemoMenuHorizontalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoMenuHorizontalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoMenuHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
