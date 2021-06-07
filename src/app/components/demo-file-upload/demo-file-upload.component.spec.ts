import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFileUploadComponent } from './demo-file-upload.component';

describe('DemoFileUploadComponent', () => {
  let component: DemoFileUploadComponent;
  let fixture: ComponentFixture<DemoFileUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoFileUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoFileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
