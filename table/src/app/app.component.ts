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
  stu2:any[]=[
    {id:1,name:'vaibhav',course:'MCA',div:'B'},
    {id:2,name:'dashrath',course:'MCA',div:'B'},
    {id:3,name:'kishan',course:'MCA',div:'B'},
    {id:4,name:'dk',course:'MCA',div:'B'},
    {id:5,name:'raghav',course:'MCA',div:'A'},
    {id:6,name:'prijen',course:'MCA',div:'B'},
  ]
}
