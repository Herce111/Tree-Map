import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoMediaObjectComponent } from './demo-media-object.component';

describe('DemoMediaObjectComponent', () => {
  let component: DemoMediaObjectComponent;
  let fixture: ComponentFixture<DemoMediaObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoMediaObjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoMediaObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
