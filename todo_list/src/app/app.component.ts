import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo_list';
  tasks:string[]=[];
  newtask:string='';

  addtask(){
    if(this.newtask.trim()){
      this.tasks.push(this.newtask.trim());
      this.newtask='';
    }
  }

removetask(index:number){
  this.tasks.splice(index,1);

}
}
