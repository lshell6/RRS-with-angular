import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Employee } from './model/employee.model';
import { EmployeeRegisterComponent } from './components/employee-register/employee-register.component';
import { ManagerRegisterComponent} from './components/manager-register/manager-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogoutComponent } from './components/auth/component/logout/logout.component';
import { EmployeeLoginComponent } from './components/auth/component/employee.login/employee.login.component';
import { ManagerLoginComponent } from './components/auth/component/manager.login/manager.login.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeRegisterComponent,
    ManagerRegisterComponent,
    LogoutComponent,
    EmployeeLoginComponent,
    ManagerLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [Employee],
  bootstrap: [AppComponent]
})
export class AppModule { }
