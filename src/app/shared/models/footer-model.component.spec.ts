import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterModelComponent } from './footer-model.component';

describe('FooterModelComponent', () => {
  let component: FooterModelComponent;
  let fixture: ComponentFixture<FooterModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
