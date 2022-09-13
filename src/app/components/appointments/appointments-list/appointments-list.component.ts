import { Component, Input, OnInit } from '@angular/core';
import { AppointmentDisplayDto } from 'src/app/model/appointment';

@Component({
  selector: 'app-appointments-list',
  templateUrl: './appointments-list.component.html',
  styleUrls: ['./appointments-list.component.css']
})
export class AppointmentsListComponent implements OnInit {

  @Input()
  public appointments !: AppointmentDisplayDto[]

  constructor() { }

  ngOnInit(): void {
  }

}
