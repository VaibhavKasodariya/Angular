import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Transform } from 'stream';

@Component({
  selector: 'app-animator',
  imports: [CommonModule],
  
  templateUrl: './animator.component.html',
  styleUrl: './animator.component.css',
  animations: [
    trigger('slideInBottom', [  
      transition(':enter', [
        style({ Transform: 'translateY(100%)' }),
        animate(1000, style({ opacity: 1 })),
        style({ transform: 'translateX(0)' })
        ]),
        transition(':leave', [
          style({ transform: 'translateX(0)' }),
          animate(1000, style({ opacity: 0 })),
          style({ transform: 'translateX(-100%)' })
          ])
          ])
          ]
})
export class AnimatorComponent {

}
