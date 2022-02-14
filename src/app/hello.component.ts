import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormArray, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'hello',
  template: `
  <div>
    <h2 class="row">Create New Company</h2>
    <form [formGroup]="form">
      <app-company-details></app-company-details>
      <div formArrayName="employees">
        <div *ngFor="let i of getEmployeesArray()">
            <app-employee-details [index]="i"></app-employee-details>
        </div>
      </div>
    </form>
    <button (click)="addEmployee()">Add Employee</button>
    <button mat-button (click)="removeEmployee()">Remove Employee</button>
    <button mat-button (click)="printJson()">Print Json</button>
</div>
{{form?.value|json}}
  `,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent implements OnInit  {
  form : FormGroup;

  employeesCount : any = 0;

  constructor(private fb : FormBuilder) { }

  ngOnInit() {

    this.form = this.fb.group({
      employees : new FormArray([]),
        });

  }

  addEmployee() {
    this.employeesCount += 1;
  }


  removeEmployee() {
    this.employeesCount -= 1;
    (this.form.get('employees') as FormArray).removeAt(this.employeesCount);
  }

  getEmployeesArray() : any {
    return Array.apply(null, {length: this.employeesCount}).map(Function.call, Number);
  }

  printJson() {
    console.log(this.form.value);
  }

}
