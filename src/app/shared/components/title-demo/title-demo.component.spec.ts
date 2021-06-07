import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleDemoComponent } from './title-demo.component';

describe('TitleDemoComponent', () => {
  let component: TitleDemoComponent;
  let fixture: ComponentFixture<TitleDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
