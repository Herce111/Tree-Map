import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleParamsComponent } from './title-params.component';

describe('TitleParamsComponent', () => {
  let component: TitleParamsComponent;
  let fixture: ComponentFixture<TitleParamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleParamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
