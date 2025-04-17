import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-productdetails',
  imports: [CommonModule],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css'
})
export class ProductdetailsComponent {
  
  productDetails:any[]=[
    {p_name:'product 1',quantity:3,rate:400},
    {p_name:'product 2',quantity:2,rate:500},
    {p_name:'product 3',quantity:4,rate:100},
    {p_name:'product 4',quantity:5,rate:900},
  ]
}
