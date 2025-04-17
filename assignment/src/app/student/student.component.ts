import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-student',
  imports: [RouterModule,CommonModule,FormsModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
  studentDetails:any[]=[
    {roll_no:27,name:'vaibhav',address:'botad',age:20},
    {roll_no:2,name:'prijen',address:'surat',age:20},
    {roll_no:64,name:'keti',address:'ahmedabad',age:21},
    {roll_no:134,name:'jay',address:'ahmedabad',age:22},
    {roll_no:65,name:'kishan',address:'gandhinagar',age:22},
  ];
  stuahmedabad:boolean=false;
  get studentsInAhmedabad() {
    
      this.stuahmedabad=true;
   
    return this.studentDetails.filter(student => student.address.toLowerCase() === 'ahmedabad');
    
  }
  toggleAhmedabadStudents() {
    this.stuahmedabad = !this.stuahmedabad;
  }
  
  
}
