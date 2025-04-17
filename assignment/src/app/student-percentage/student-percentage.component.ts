import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-student-percentage',
  imports: [CommonModule],
  templateUrl: './student-percentage.component.html',
  styleUrl: './student-percentage.component.css'
})
export class StudentPercentageComponent {

  student={
    name: 'Vaibhav',
    roll_no: 27,
    ds:70,
    angular:80,
    mad:90,
    st:75,
    se:70,
    cs:60
  }
  totalMarks:number=this.student.angular + this.student.cs + this.student.ds + this.student.mad + this.student.se + this.student.st;

  percentage:number=(this.totalMarks/600)*100;
 
}
