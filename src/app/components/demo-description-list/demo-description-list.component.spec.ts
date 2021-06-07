import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDescriptionListComponent } from './demo-description-list.component';

describe('DemoDescriptionListComponent', () => {
  let component: DemoDescriptionListComponent;
  let fixture: ComponentFixture<DemoDescriptionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoDescriptionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoDescriptionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
