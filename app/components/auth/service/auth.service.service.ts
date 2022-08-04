import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Employee } from 'src/app/model/employee.model';
import { Manager } from 'src/app/model/manager.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  username: string;
  message$ = new BehaviorSubject<string>('');

  loginApi = 'http://localhost:1739/login'

  username$ = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) {
    this.username='';
   }

  isLoggedIn(): boolean{
    this.username = localStorage.getItem('username');
    if(this.username == null)
      return false;
    return true;
  }

  employeeLogin(username: string, password: string): Observable<Employee>{
    let encodedCredentials = btoa(username + ":" + password);
    let httpOptions = {
      headers : new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization' : 'basic ' + encodedCredentials
    })
  };
    return this.http.get<Employee>(this.loginApi, httpOptions);
  }
  managerLogin(username: string, password: string): Observable<Manager>{
    let encodedCredentials = btoa(username + ":" + password);
    let httpOptions = {
      headers : new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization' : 'basic ' + encodedCredentials
    })
  };
    return this.http.get<Manager>(this.loginApi, httpOptions);
  }
}
