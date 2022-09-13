import { Component, Input, OnInit } from '@angular/core';
import { AppointmentDisplayDto } from 'src/app/model/appointment';
import { AppointmentsService } from 'src/app/services/appointments.service';

@Component({
  selector: 'app-appointment-delete-modal',
  templateUrl: './appointment-delete-modal.component.html',
  styleUrls: ['./appointment-delete-modal.component.css']
})
export class AppointmentDeleteModalComponent implements OnInit {

  display = "none"

  @Input()
  public appointment!: AppointmentDisplayDto

  constructor(private appointmentService: AppointmentsService) { }

  ngOnInit(): void {
  }

  onCloseHandled() {
    this.display = "none"
  }

  openModal() {
    this.display = "block"
  }

  postponeReservation() {
    this.appointmentService.deleteAppointments(this.appointment).subscribe(
      resp => {
        console.log(resp)
        alert("Uspesno otkazana rezervacija")
        window.location.reload()
      },
      err => {
        console.log(err)
        alert(err.error)
      }
    )
  }
}
