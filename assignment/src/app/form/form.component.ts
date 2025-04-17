import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [FormsModule,CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  user:any={
    firstname:'',
    fullname:'',
    lastname:'',
    email:'',
    city:'',
    state:'',
    Zip:'' }
    userformsubmit(){
    
    } 
}
