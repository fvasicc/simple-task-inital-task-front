import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DentistAuthGuard } from './guards/dentist-auth-guard';
import { CreateAppointmentComponent } from './pages/create-appointment/create-appointment.component';
import { DentistAppointmentsCalendarComponent } from './pages/dentist-appointments-calendar/dentist-appointments-calendar.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PatientApointmentsComponent } from './pages/patient-apointments/patient-apointments.component';

const routes: Routes = [
  { path: '', redirectTo: 'pocetna', pathMatch: 'full' },
  { path: 'pocetna', component: HomePageComponent },
  { path: 'create-appointment', component: CreateAppointmentComponent },
  { path: 'patient-appointments', component: PatientApointmentsComponent },
  { path: 'dentist-calendar', component: DentistAppointmentsCalendarComponent, canActivate: [DentistAuthGuard] },
  {
    path: '**', component: ErrorPageComponent,
    data: {
      error: '404 - PAGE NOT FOUND',
      msg: 'Stranica nije pronadjena, stranica je mozda prebacena na drugu lokaciju ili je trenutno nedostupna',
      route: '',
      buttonText: 'Vrati se na Pocetnu stranu'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
