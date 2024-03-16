import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-submit-patient',
  templateUrl: './submit-patient.component.html',
  styleUrls: ['./submit-patient.component.css']
})
export class SubmitPatientComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    this.createForm();
  }

  pastDate(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const forbidden = new Date(control.value) > new Date();
      return forbidden ? { 'pastDate': { value: control.value } } : null;
    };
  }

  createForm() {
    this.form = this.fb.group({
      pId: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(10)]],
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      address: ['', Validators.maxLength(200)],
      contactNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      email: ['', Validators.email],
      dateOfBirth: ['', [Validators.required, this.pastDate()]],
      placeOfBirth: ['', Validators.maxLength(100)],
      timeOfBirth: ['']
    });
  }

  hasError(controlName: string, errorName: string) {
    return this.form.controls[controlName].touched && this.form.controls[controlName].hasError(errorName);
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
