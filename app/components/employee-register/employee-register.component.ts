import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-register',
  templateUrl: './employee-register.component.html',
  styleUrls: ['./employee-register.component.css']
})
export class EmployeeRegisterComponent implements OnInit {
  employeeRegForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.employeeRegForm=new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]),
      username: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]),
      password: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]),
      checkPassword: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)])
    });
  }
  onEmpRegFormSubmit(){
    //write check password if stmt here???
      //if this.employeeRegForm.value.password != this.employeeRegForm.value.checkPassword
        //return them back to the form
      //else display main emp page
      console.log(this.employeeRegForm.value);
  }
}
