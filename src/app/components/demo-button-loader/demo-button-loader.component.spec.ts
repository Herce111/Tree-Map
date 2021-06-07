import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoButtonLoaderComponent } from './demo-button-loader.component';

describe('DemoButtonLoaderComponent', () => {
  let component: DemoButtonLoaderComponent;
  let fixture: ComponentFixture<DemoButtonLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoButtonLoaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoButtonLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
