import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'display_product_detail';
  nameofproduct:string="MacBook";
  priceofproduct:number=150000;
  productquantity:number=10;
  totalBill:number=0;
  buttonclick=false;


  BillTotal(){
    this.buttonclick=true;
    this.totalBill=this.priceofproduct*this.productquantity;
  }


}
