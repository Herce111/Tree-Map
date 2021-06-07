import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoBreadcrumbsComponent } from './demo-breadcrumbs.component';

describe('DemoBreadcrumbsComponent', () => {
  let component: DemoBreadcrumbsComponent;
  let fixture: ComponentFixture<DemoBreadcrumbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoBreadcrumbsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoBreadcrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
