import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  imports: [CommonModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
employeedetail:any[]=[
  {id:1,name:'BALAR',department:'IT',city:'SURAT'},
  {id:2,name:'VaibhV',department:'ACCOUNT',city:'BOTAD'},
  {id:3,name:'JAY',department:'IT',city:'Ahmedabad'},
  {id:4,name:'KETI',department:'ACCOUNT',city:'GANDHINAGAR'},
  {id:5,name:'KISHAN',department:'COM SCIENCE',city:'RAJKOT'},
]
}
