import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager.component',
  templateUrl: './manager-register.component.html',
  styleUrls: ['./manager-register.component.css']
})
export class ManagerRegisterComponent implements OnInit {
  managerRegForm: FormGroup;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.managerRegForm=new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]),
      username: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]),
      password: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]),
      checkPassword: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)])
    });
  }
  searchFormSubmit(searchForm: NgForm){
    console.log(searchForm.value);
  }
  onMgrRegFormSubmit(){
    console.log(this.managerRegForm.value);
    this.router.navigateByUrl('/manager/login');
  }
}
