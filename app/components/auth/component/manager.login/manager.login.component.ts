import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Manager } from 'src/app/model/manager.model';
import { AuthService } from '../../service/auth.service.service';

@Component({
  selector: 'app-manager.login',
  templateUrl: './manager.login.component.html',
  styleUrls: ['./manager.login.component.css']
})
export class ManagerLoginComponent implements OnInit {
  mgrLoginForm: FormGroup;
  username: string;
  password: string;
  message: string;
  manager: Manager;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.mgrLoginForm= new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    })
    this.authService.message$.subscribe(data=>{
      this.message = data;
    })
  }
  onMgrFormSubmit(){
    this.username = this.mgrLoginForm.value.username;
    this.password = this.mgrLoginForm.value.password;

    this.authService.managerLogin(this.username, this.password).subscribe({
      next: (data) => {
        this.manager = data;
        localStorage.setItem('username',this.manager.username);
        this.authService.username$.next(this.manager.username);
        this.router.navigateByUrl('/manager');
      },
      error: (e) => {
        this.authService.message$.next("invalid credentials, please try again");
      }
    })
  }
}
