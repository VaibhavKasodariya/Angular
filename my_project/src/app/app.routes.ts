import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import path from 'path';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { NewsComponent } from './news/news.component';
import { AnimatorComponent } from './components/animator/animator.component';

export const routes: Routes = [
    {
        path: "employee",
        component: EmployeeComponent
    },
    {
        path: 'news',
        component:NewsComponent
    },
    {
        path:'animation',
        component:AnimatorComponent
    }
   
];
