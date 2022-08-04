import { Injectable } from "@angular/core";
import { __values } from "tslib";
import { employeeData } from "../data";
import { Employee } from "../model/employee.model";

@Injectable({
    providedIn: "root"
})
export class EmployeeService{
    employees: Employee[];

    constructor(){
        this.employees=employeeData;
    }

}