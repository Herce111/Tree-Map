import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoSkipLinkComponent } from './demo-skip-link.component';

describe('DemoSkipLinkComponent', () => {
  let component: DemoSkipLinkComponent;
  let fixture: ComponentFixture<DemoSkipLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoSkipLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoSkipLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
