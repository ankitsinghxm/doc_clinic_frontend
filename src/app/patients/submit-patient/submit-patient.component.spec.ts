import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitPatientComponent } from './submit-patient.component';

describe('SubmitPatientComponent', () => {
  let component: SubmitPatientComponent;
  let fixture: ComponentFixture<SubmitPatientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubmitPatientComponent]
    });
    fixture = TestBed.createComponent(SubmitPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
