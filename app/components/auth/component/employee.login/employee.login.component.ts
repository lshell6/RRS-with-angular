import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee.model';
import { AuthService } from '../../service/auth.service.service';

@Component({
  selector: 'app-employee.login',
  templateUrl: './employee.login.component.html',
  styleUrls: ['./employee.login.component.css']
})
export class EmployeeLoginComponent implements OnInit {
  empLoginForm: FormGroup;
  username: string;
  password: string;
  message: string;
  employee: Employee;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.empLoginForm= new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    })
    this.authService.message$.subscribe(data=>{
      this.message = data;
    })
  }
  onEmpFormSubmit(){
    this.username = this.empLoginForm.value.username;
    this.password = this.empLoginForm.value.password;

    this.authService.employeeLogin(this.username, this.password).subscribe({
      next: (data) => {
        this.employee = data;
        localStorage.setItem('username',this.employee.username);
        this.authService.username$.next(this.employee.username);
        this.router.navigateByUrl('/dashboard');
      },
      error: (e) => {
        this.authService.message$.next("invalid credentials, please try again");
      }
    })
  }
}
