import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentDisplayDto } from '../model/appointment';

@Injectable({
  providedIn: 'root'
})
export class DentistService {

  BASE = "http://localhost:8080/api/dentist/"

  constructor(private httpClient: HttpClient, private router: Router) { }

  public getAllApointments() {
    return this.httpClient.get<AppointmentDisplayDto[]>(this.BASE + "appointments");
  }

  public getTodayAppointments() {
    return this.httpClient.get<AppointmentDisplayDto[]>(this.BASE + "appointments/today")
  }

  public getCurrentWeekAppointments() {
    return this.httpClient.get<AppointmentDisplayDto[]>(this.BASE + "appointments/week/current")
  }

  public getAppointmentsByDate(date: Date) {
    return this.httpClient.get<AppointmentDisplayDto[]>(this.BASE + "appointments/" + formatDate(date, "yyyy-MM-dd", "en-US"))
  }

  public getAppointmentsByWeek(date: Date) {
    return this.httpClient.get<AppointmentDisplayDto[]>(this.BASE + "appointments/week/" + formatDate(date, "yyyy-MM-dd", "en-US"))
  }

  public checkDentist(key: string) {
    return this.httpClient.get(this.BASE + "checkDentist/" + key)
  }

  public isDentistLogged() {
    if (localStorage.getItem("dentist"))
      return true
    return false
  }

  logout() {
    localStorage.removeItem('dentist')
    this.router.navigate(['/pocetna'])
    setTimeout(() => window.location.reload(), 100)
  }
}
