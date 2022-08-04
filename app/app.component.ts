import { Component, OnInit } from '@angular/core';
import { Employee } from './model/employee.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  [x: string]: any;
  id: number;
  name: string;
  username: string;
  password: string;
  employees: Employee[];

  constructor(){ }

  ngOnInit(): void {
    this.id=0;
    this.name="";
    this.username="";
    this.password="";
  }
  display():void{
    console.log('display called..');
  }
}
