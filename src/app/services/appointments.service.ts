import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppointmentDisplayDto, AppointmentInputDto, AppointmentTimeDto } from '../model/appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {

  BASE = "http://localhost:8080/api/appointments/"

  constructor(private httpClient: HttpClient) { }

  public createAppointments(appointment: AppointmentInputDto) {
    return this.httpClient.post(this.BASE + "new", appointment)
  }

  public getFreeAppointments(date: Date, length: number): Observable<AppointmentTimeDto[]> {
    if (length === 60)
      return this.httpClient.get<AppointmentTimeDto[]>(this.BASE + "freeOnHour/" + formatDate(date, "yyyy-MM-dd", "en-US"))
    return this.httpClient.get<AppointmentTimeDto[]>(this.BASE + "freeOnHalfHour/" + formatDate(date, "yyyy-MM-dd", "en-US"))
  }

  public deleteAppointments(appointment: AppointmentDisplayDto) {
    return this.httpClient.delete(this.BASE + "delete/" + appointment.id)
  }

}
