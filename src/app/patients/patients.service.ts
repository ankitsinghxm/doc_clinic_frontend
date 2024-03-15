import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {
  baseUrl = 'http://localhost:3000/patient';

  constructor(
    private http: HttpClient
  ) { }

  getPatients() {
    return this.http.get('http://localhost:3000/patient').pipe(
      map((res: any) => {
        return {
          patients: res.patients.map((patient: { id: any; name: any; email: any; }) => ({
            id: patient.id,
            name: patient.name,
            email: patient.email
          })),
          totalCount: res.totalCount
        };
      })
    );
  }
}
