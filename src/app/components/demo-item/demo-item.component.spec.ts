import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoItemComponent } from './demo-item.component';

describe('DemoItemComponent', () => {
  let component: DemoItemComponent;
  let fixture: ComponentFixture<DemoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
