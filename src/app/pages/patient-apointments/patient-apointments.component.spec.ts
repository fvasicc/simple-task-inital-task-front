import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientApointmentsComponent } from './patient-apointments.component';

describe('PatientApointmentsComponent', () => {
  let component: PatientApointmentsComponent;
  let fixture: ComponentFixture<PatientApointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientApointmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientApointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
