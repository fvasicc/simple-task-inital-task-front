import { Component, OnInit } from '@angular/core';
import { AppointmentDisplayDto } from 'src/app/model/appointment';
import { DentistService } from 'src/app/services/dentist.service';

@Component({
  selector: 'app-dentist-appointments-calendar',
  templateUrl: './dentist-appointments-calendar.component.html',
  styleUrls: ['./dentist-appointments-calendar.component.css']
})
export class DentistAppointmentsCalendarComponent implements OnInit {

  public appointmentsList: Array<AppointmentDisplayDto> = []

  public date: Date = new Date()

  constructor(private dentistService: DentistService) { 
    this.getTodayAppointments()
  }

  ngOnInit(): void {
  }

  getAppointmentsByDate() {
    this.dentistService.getAppointmentsByDate(this.date).subscribe(resp => this.appointmentsList = resp)
  }

  getAppointmentsForWeek() {
    this.dentistService.getAppointmentsByWeek(this.date).subscribe(resp => this.appointmentsList = resp)
  }

  getTodayAppointments() {
    this.dentistService.getTodayAppointments().subscribe(resp => this.appointmentsList = resp)
  }

  getCurrentWeekAppointments() {
    this.dentistService.getCurrentWeekAppointments().subscribe(resp => this.appointmentsList = resp)
  }

}
