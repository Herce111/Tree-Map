import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoSearchBarComponent } from './demo-search-bar.component';

describe('DemoSearchBarComponent', () => {
  let component: DemoSearchBarComponent;
  let fixture: ComponentFixture<DemoSearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoSearchBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
