import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  username="vaibhav";
  plelogin="You are not Login!";
  islogin=false;
  islogout=false;

  login(){
    this.islogin=!this.islogin;
  }
  logout(){
    this.islogout=!this.islogout;
  }
}
