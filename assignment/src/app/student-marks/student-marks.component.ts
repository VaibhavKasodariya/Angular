import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-student-marks',
  imports: [CommonModule],
  templateUrl: './student-marks.component.html',
  styleUrl: './student-marks.component.css'
})
export class StudentMarksComponent {
 student:any[]=[
  {name:"Vaibhav",marks:92},
  {name:"Prijen",marks:82},
  {name:"Keti",marks:75},
  {name:"Jay",marks:65},
  {name:"Kishan",marks:56},
 ];
 stugrade(marks:number){
  if(marks>90){
    return 'A';
  }
  else if(marks>80){
    return 'B';
 }
 else if(marks>70){
  return 'C';
  }
  else if(marks>60){
    return 'D';
    }
    else{
      return 'F';
      } 
      }

}
