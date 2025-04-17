import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterLink, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'routing_navbar';

  user: any[] = [];
  displayTable=false;

  constructor(private http: HttpClient) {
  
  }
  getDetail() {

    this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe((result: any) => {
  // Log the result to see what is returned
        this.user = result;
        this.displayTable=true;
      });
  }
}
