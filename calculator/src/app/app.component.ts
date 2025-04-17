import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calculator';
  projectname:string="Simple Calculator";
  firstnum:number=0;
  secondnum:number=0;
  calresult:number=0;

  addition(){
    this.calresult=Number(this.firstnum)+Number(this.secondnum);
  }
  subtraction(){
    this.calresult=this.firstnum-this.secondnum;
    
  }
  multiplication(){
    this.calresult=this.firstnum*this.secondnum;

  }
  divition(){
    this.calresult=this.firstnum/this.secondnum;

  }
  reset(){
    this.calresult=0;
    this.firstnum=0;
    this.secondnum=0;
  }
}
