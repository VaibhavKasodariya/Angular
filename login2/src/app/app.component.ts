import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule,ProfileComponent,LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  username="vaibhav";
  islogin=false;
  

  login(){
    this.islogin=!this.islogin;
  }
  
}
