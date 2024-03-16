import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientsComponent } from './patients/patients.component';
import { SubmitPatientComponent } from './patients/submit-patient/submit-patient.component';

const routes: Routes = [
  { path: 'patients', component: PatientsComponent },
  { path: 'patient', component: SubmitPatientComponent },
  { path: 'patient/:id', component: SubmitPatientComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
