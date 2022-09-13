import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppointmentsService } from 'src/app/services/appointments.service';
import { AppointmentInputDto, AppointmentTimeDto } from '../../model/appointment'

@Component({
  selector: 'app-create-appointment-form',
  templateUrl: './create-appointment-form.component.html',
  styleUrls: ['./create-appointment-form.component.css']
})
export class CreateAppointmentFormComponent implements OnInit {

  public appointment: AppointmentInputDto

  public date = new Date()

  public freeApointments: Array<AppointmentTimeDto> = []
  public selectedAppointment!: AppointmentTimeDto
  public selectedLength = 60

  constructor(private appointmetService: AppointmentsService) { 
    this.appointment = {
      description: "",
      start: new Date(),
      end: new Date(),
      patientInfo: {
        name: "",
        surname: "",
        email: "",
        jmbg: "",
        phoneNumber: ""
      }
    }
  }

  ngOnInit(): void {
    this.getFreeApointments()
  }

  submit(){
    console.log(this.appointment)
    this.appointmetService.createAppointments(this.appointment).subscribe(
      resp => {
        console.log(resp)
        alert("Uspesno kreirana rezervacija!")
      },
      err => {
        console.log(err)
        alert(err.error)
      }
    )
  }

  getFreeApointments() {
    this.appointmetService.getFreeAppointments(this.date, this.selectedLength).subscribe(resp => {this.freeApointments = resp; console.log(resp)})
  }

  changeAppointmentTime() {
    this.appointment.start = this.selectedAppointment.start
    this.appointment.end = this.selectedAppointment.end
  }

  setAppointmentLength(l : number) {
    this.selectedLength = l;
    this.getFreeApointments()
  }

}
