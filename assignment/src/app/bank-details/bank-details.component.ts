import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-bank-details',
  imports: [CommonModule],
  templateUrl: './bank-details.component.html',
  styleUrl: './bank-details.component.css'
})
export class BankDetailsComponent {
  bankDetails:any[]=[
    {b_name:'BOI',micr:'GFX098789', ifsc:'AAZ3421', address:'gadhada',},
    {b_name:'SBI',micr:'QW7869056', ifsc:'SBIN123', address:'surat',},
    {b_name:'AXIS',micr:'GFX098789', ifsc:'AXIS9098', address:'vadodra',},
    {b_name:'KOTAK MAHINDRA BANK',micr:'QOU651290', ifsc:'KIM2345', address:'rajkot',},
    {b_name:'BOB',micr:'BGV678951', ifsc:'BOB9087', address:'amreli',}
  ]
}
