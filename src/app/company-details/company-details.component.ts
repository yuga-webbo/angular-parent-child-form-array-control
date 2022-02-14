import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup, FormBuilder, Validators, AbstractControl, FormArray, ValidatorFn, ControlContainer, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-company-details',
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }
  ],
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {

  company: any;
  fgd : FormGroupDirective;

  constructor(private fb: FormBuilder,
             parent: FormGroupDirective) {
               this.fgd = parent;
              }

  ngOnInit() {

  this.company = this.fgd.form;

  this.company.addControl('company', this.fb.group({
      name : new FormControl(),
      city : new FormControl()
    }));


  }

}