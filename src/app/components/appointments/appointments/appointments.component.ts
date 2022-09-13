import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { AppointmentDisplayDto } from 'src/app/model/appointment';
import { AppointmentsService } from 'src/app/services/appointments.service';
import { AppointmentDeleteModalComponent } from '../../appointment-delete-modal/appointment-delete-modal.component';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {

  @Input()
  public appointment!: AppointmentDisplayDto

  @ViewChild(AppointmentDeleteModalComponent)
  deleteModal!: AppointmentDeleteModalComponent

  constructor(private appointmentService: AppointmentsService) { }

  ngOnInit(): void {
  }

  openDeleteConfirmModal() {
    this.deleteModal.openModal()
  }
}
