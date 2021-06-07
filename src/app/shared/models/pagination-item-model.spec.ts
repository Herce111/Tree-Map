import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationItemModelComponent } from './pagination-item-model';

describe('PaginationItemModelComponent', () => {
  let component: PaginationItemModelComponent;
  let fixture: ComponentFixture<PaginationItemModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginationItemModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationItemModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
