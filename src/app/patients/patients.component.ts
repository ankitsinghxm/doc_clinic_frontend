import { Component, OnInit } from '@angular/core';
import { PatientsService } from './patients.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit{
  patients$: Observable<any> | undefined;

  constructor(
    private patientsService: PatientsService
  ) { }

  ngOnInit(): void {
    this.patients$ = this.patientsService.getPatients();
  }
}
