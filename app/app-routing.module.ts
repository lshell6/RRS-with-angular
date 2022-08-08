import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeLoginComponent } from './components/auth/component/employee.login/employee.login.component';
import { ManagerLoginComponent } from './components/auth/component/manager.login/manager.login.component';
import { EmployeeRegisterComponent } from './components/employee-register/employee-register.component';
import { LandingPageComponent } from './components/landing-page/landing-page/landing-page.component';
import { ManagerRegisterComponent } from './components/manager-register/manager-register.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'employee/login', component: EmployeeLoginComponent},
  {path: 'employee/register', component: EmployeeRegisterComponent},
  {path: 'manager/login', component: ManagerLoginComponent},
  {path: 'manager/register', component: ManagerRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
