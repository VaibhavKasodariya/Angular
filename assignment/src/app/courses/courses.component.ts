import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  imports: [CommonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {

  Undergraduate:string[]=['BBA','BCA','B.Sc.(IT)','B.Com'];
  post:string[]=['M.Sc (IT)','MCA'];

}
