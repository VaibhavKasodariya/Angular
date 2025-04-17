import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[DataService]
})
export class AppComponent {
  title = 'servicedemo';

  receivedata1:string[]=[];
  receivedata2:string[]=[];

   // receive data from student
   receivestudent1:string[]=[];
   receivestudent2:string[]=[];
   receivestudent3:string[]=[];
   receivestudent4:string[]=[];
   receivestudent5:string[]=[];

   // receive data from faculty
   receivefaculty1:string[]=[];
   receivefaculty2:string[]=[];
   receivefaculty3:string[]=[];
   receivefaculty4:string[]=[];
   receivefaculty5:string[]=[];

   constructor(private sdata:DataService){

   }

   getdetail1(){
    this.receivedata1=this.sdata.student1;
  }
  getdetail2(){
    this.receivedata2=this.sdata.student2;

  }

  //Method to get data from data service for student
  
  getstu1(){
    this.receivestudent1=this.sdata.student1;
  }
  getstu2(){
    this.receivestudent2=this.sdata.student2;
  }
  getstu3(){
    this.receivestudent3=this.sdata.student3;
  }
  getstu4(){
    this.receivestudent4=this.sdata.student4;
  }
  getstu5(){
    this.receivestudent5=this.sdata.student5;
  }

  //Method to get data from data service for faculty

  getfac1(){
    this.receivefaculty1=this.sdata.faculty;
  }
  getfac2(){
    this.receivefaculty2=this.sdata.faculty2;
  }
  getfac3(){
    this.receivefaculty3=this.sdata.faculty3;
  }
  getfac4(){
    this.receivefaculty4=this.sdata.faculty4;
  }
  getfac5(){
    this.receivefaculty5=this.sdata.faculty5;
  }
}
