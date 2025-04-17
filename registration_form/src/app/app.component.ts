import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [StudentService]
})
export class AppComponent {
  title = 'registration_form';
  user:any={
    firstname:'',
    fullname:'',
    lastname:'',
    email:'',
    city:'',
    state:'',
    Zip:'' }
    title1 = 'service demo';
    imageurl="https://wallmantra.com/wp-content/uploads/1921_jpg.jpg";

  
    student:any[]=[];
    receicefaculty:any[]=[];

    displaystudent:boolean=false;
    displayfaculty:boolean=false;


    // methods to get data for each student

    //Inject data service into class using dependancy injection
    constructor(private sdata:StudentService ){

    }
    // fuculty function
    getfaculty(){
      this.receicefaculty=this.sdata.facultys;
      this.displayfaculty=true;
      this.displaystudent=false;
    }
    // student function
    getstudent(){
      this.student=this.sdata.students;
      this.displayfaculty=false;
      this.displaystudent=true;

    }
    
  userformsubmit(){
    
  } 
  }
  

