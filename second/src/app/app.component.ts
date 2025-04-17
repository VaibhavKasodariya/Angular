
import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 // studentList:string[]=["vaibhav","kishan","dashrath"];
 /* stu2:any[]=[
    {id:1,name:'vp',course:'MCA',Div:'B'},
    {id:2,name:'kishan',course:'MCA',Div:'B'},
    {id:3,name:'dashrath',course:'MCA',Div:'B'},
    {id:4,name:'raghav',course:'MCA',Div:'B'},
  ];*/
 
  display=false;
  users:any[]=[];
  name:string='';
  rollnumber:number= 0;
  division:string='';


  isdisplay() {
    this.display!=this.display;

    this.users.push({name:this.name,rollnumber:this.rollnumber,division:this.division});
    this.name='';
    this.rollnumber=0;
    this.division='';
    console.log(this.users);
  }
}
