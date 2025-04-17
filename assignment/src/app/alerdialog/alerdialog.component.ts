import { Component } from '@angular/core';

@Component({
  selector: 'app-alerdialog',
  imports: [],
  templateUrl: './alerdialog.component.html',
  styleUrl: './alerdialog.component.css'
})
export class AlerdialogComponent {
  alertMsg(){
    alert("This is alert message box");
  }
}
