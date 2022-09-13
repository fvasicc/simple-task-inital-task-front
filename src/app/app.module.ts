import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateAppointmentFormComponent } from './components/create-appointment-form/create-appointment-form.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { CreateAppointmentComponent } from './pages/create-appointment/create-appointment.component';
import { PatientApointmentsComponent } from './pages/patient-apointments/patient-apointments.component';
import { AppointmentsListComponent } from './components/appointments/appointments-list/appointments-list.component';
import { AppointmentsComponent } from './components/appointments/appointments/appointments.component';
import { HeaderComponent } from './components/header/header.component';
import { DentistAppointmentsCalendarComponent } from './pages/dentist-appointments-calendar/dentist-appointments-calendar.component';
import { AppointmentDeleteModalComponent } from './components/appointment-delete-modal/appointment-delete-modal.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { DentistAuthGuard } from './guards/dentist-auth-guard';

@NgModule({
  declarations: [
    AppComponent,
    CreateAppointmentFormComponent,
    CreateAppointmentComponent,
    PatientApointmentsComponent,
    AppointmentsListComponent,
    AppointmentsComponent,
    HeaderComponent,
    DentistAppointmentsCalendarComponent,
    AppointmentDeleteModalComponent,
    HomePageComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DentistAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
