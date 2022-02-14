import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, AbstractControl, FormArray, ValidatorFn, ControlContainer, FormGroupDirective } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgControl } from '@angular/forms';

@Component({
  selector: 'app-employee-details',
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }
  ],
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  employee: any;
  @Input() index;

  constructor(private fb: FormBuilder,
              private fgd: FormGroupDirective) {}

  ngOnInit() {
    const array=(this.fgd.form.get('employees') as FormArray);

    array.push(this.fb.group({
      name: '',
      planet: ''
      }));
    this.employee = array.at(this.index)
  }


}