import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeBarComponent } from './tree-bar.component';

describe('TreeBarComponent', () => {
  let component: TreeBarComponent;
  let fixture: ComponentFixture<TreeBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreeBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
