import { Routes } from '@angular/router';
import { AddStudent } from './add-student/add-student';
import { ViewStudent } from './view-student/view-student';

export const routes: Routes = [
  { path: '', redirectTo: 'view', pathMatch: 'full' },
  { path: 'add', component: AddStudent },
  { path: 'view', component: ViewStudent }
];