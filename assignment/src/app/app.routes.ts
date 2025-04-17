import { Routes } from '@angular/router';
import { StaffComponent } from './staff/staff.component';
import { StudentComponent } from './student/student.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { AlerdialogComponent } from './alerdialog/alerdialog.component';
import { StudentMarksComponent } from './student-marks/student-marks.component';
import { StudentPercentageComponent } from './student-percentage/student-percentage.component';
import { GameslistComponent } from './gameslist/gameslist.component';
import { CoursesComponent } from './courses/courses.component';
import { FormComponent } from './form/form.component';

export const routes: Routes = [
    {
        path: 'staff',
        component: StaffComponent,
    },
    {
        path: 'student',
        component: StudentComponent,
    },
    {
    path: 'bankdetail',
    component: BankDetailsComponent,
    },
    {
        path:'productdetails',
        component:ProductdetailsComponent,
    },
    {
        path: 'alert_message',
        component:AlerdialogComponent,
    },
    {
        path: 'stu_marks',
        component:StudentMarksComponent,
    },
    {
        path:'stu_percentage',
        component:StudentPercentageComponent,
    },
    {
        path: 'gamelist',
        component: GameslistComponent,
    },
    {
        path: 'courses',
        component:CoursesComponent,
    },
    {
        path:'form',
        component:FormComponent,
    }

];
