  import { CommonModule } from '@angular/common';
  import { Component } from '@angular/core';
  import { RouterModule } from '@angular/router';
  import {FormsModule} from '@angular/forms';

  @Component({
    selector: 'app-staff',
    imports: [RouterModule,CommonModule,FormsModule],
    templateUrl: './staff.component.html',
    styleUrl: './staff.component.css'
  })
  export class StaffComponent {
    staffDetail:any[]=[
      {id:1,name:'Vaibhav',address:'botad',salary:200000},
      {id:2,name:'prijen',address:'surat',salary:100000},
      {id:3,name:'keti',address:'ahmedabad',salary:150000},
      {id:4,name:'jay',address:'ahmedabad',salary:180000},
      {id:5,name:'kishan',address:'gandhinagar',salary:200000},
    ];
    sortedStaff = this.staffDetail.sort((a, b) => a.salary - b.salary);

  }
