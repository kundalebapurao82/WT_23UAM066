import { Routes } from '@angular/router';
import { Home } from '../home/home';
// import RouterOutlet and RouterLink
import { RouterOutlet, RouterLink } from '@angular/router';
import { AddStudent } from '../add-student/add-student';
import { ViewStudent } from '../view-student/view-student';

export const routes: Routes = [
    {path:'home', component : Home},
    {path:'addStudent', component : AddStudent},
    {path: 'viewStudent', component:ViewStudent}
];
