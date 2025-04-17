import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  user={
    pass:'',
    email:'',
    gender:'',
    city:'',
    state:'',
    country:'',
  };
  onsubmit(){
    console.log(this.user.email);
    console.log(this.user.pass);
  }
}
