import { Component, OnInit } from '@angular/core';
import { AppointmentDisplayDto } from 'src/app/model/appointment';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient-apointments',
  templateUrl: './patient-apointments.component.html',
  styleUrls: ['./patient-apointments.component.css']
})
export class PatientApointmentsComponent implements OnInit {

  public patientJmbg: string = ""

  public appointmentsList: Array<AppointmentDisplayDto> = []

  constructor(private pattientService: PatientService) { }

  ngOnInit(): void {
  }

  searchAppointments() {
    this.pattientService.getAppointmentsForPatient(this.patientJmbg).subscribe(resp => { this.appointmentsList = resp; console.log(resp)})
  }

}
