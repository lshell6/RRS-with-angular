import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Employee.LoginComponent } from './employee.login.component';

describe('Employee.LoginComponent', () => {
  let component: Employee.LoginComponent;
  let fixture: ComponentFixture<Employee.LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Employee.LoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Employee.LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
