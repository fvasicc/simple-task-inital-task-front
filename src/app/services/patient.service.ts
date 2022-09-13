import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppointmentDisplayDto } from '../model/appointment';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  BASE = "http://localhost:8080/api/patient/"

  constructor(private httpClient: HttpClient) { }

  public getAppointmentsForPatient(jmbg: string): Observable<AppointmentDisplayDto[]>{
    return this.httpClient.get<AppointmentDisplayDto[]>(this.BASE + "appointments/" + jmbg)
  }
}
