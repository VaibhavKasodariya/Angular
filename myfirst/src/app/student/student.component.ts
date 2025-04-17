import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  imports: [],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
name:string="Vaibhav";
age:number=20;
cource:string="MCA";
marks:number=600;
}
