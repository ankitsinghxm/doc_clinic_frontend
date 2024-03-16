import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patient } from './patient';
import { Observable, map } from 'rxjs';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {
  baseUrl = 'http://localhost:3000/patient';

  constructor(
    private http: HttpClient
  ) { }

  getPatients(page: number, limit: number, searchTerm: string = ''): Observable<any> {
    const params = new HttpParams()
    .set('page', page)
    .set('limit', limit)
    .set('searchTerm', searchTerm);
    return this.http.get('http://localhost:3000/patient', { params }).pipe(
      map((res: any) => {
        return {
          patients: res.patients.map((patient: Patient) => ({
            id: patient.id,
            patientId: patient.pId,
            name: patient.name,
            contactNumber: patient.contactNumber,
            age: new Date().getFullYear() - new Date(patient.dateOfBirth).getFullYear(),
            updatedDate: moment(patient.updatedDate).format('DD-MM-YYYY')
          })),
          totalCount: res.totalCount
        };
      })
    );
  }
}
