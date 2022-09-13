import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DentistAppointmentsCalendarComponent } from './dentist-appointments-calendar.component';

describe('DentistAppointmentsCalendarComponent', () => {
  let component: DentistAppointmentsCalendarComponent;
  let fixture: ComponentFixture<DentistAppointmentsCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DentistAppointmentsCalendarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DentistAppointmentsCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
