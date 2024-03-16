import { Component, OnInit } from '@angular/core';
import { PatientsService } from './patients.service';
import { Observable, Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  patients$: Observable<any> | undefined;
  page = 1;
  limit = 10;

  searchTerm = new Subject<string>();
  searchTerm$ = this.searchTerm.pipe(
    debounceTime(300),
    switchMap(term => this.patientsService.getPatients(this.page, this.limit, term))
  );

  constructor(
    private patientsService: PatientsService
  ) { }

  ngOnInit(): void {
    this.patients$ = this.patientsService.getPatients(this.page, this.limit);
  }

  onPageChange(page: number) {
    this.page = page;
    this.patients$ = this.patientsService.getPatients(this.page, this.limit);
  }

  onSearch(event: any) {
    const term = event?.target.value.trim();
    this.searchTerm.next(term);
    this.patients$ = this.searchTerm$;
  }
}
