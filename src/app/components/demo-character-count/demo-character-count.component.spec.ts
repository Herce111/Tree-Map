import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoCharacterCountComponent } from './demo-character-count.component';

describe('DemoCharacterCountComponent', () => {
  let component: DemoCharacterCountComponent;
  let fixture: ComponentFixture<DemoCharacterCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoCharacterCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoCharacterCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
