import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImplementationInfoComponent } from './implementation-info.component';

describe('ImplementationInfoComponent', () => {
  let component: ImplementationInfoComponent;
  let fixture: ComponentFixture<ImplementationInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImplementationInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImplementationInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
