import { Component } from '@angular/core';
import { AddStudent } from './add-student/add-student';
import { ViewStudent } from './view-student/view-student';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AddStudent, ViewStudent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {

  students = [
    { id: 1, name: 'Rahul', age: 20, course: 'CSE' },
    { id: 2, name: 'Priya', age: 21, course: 'IT' }
  ];

  addStudent(student: any) {
    this.students.push(student);
  }
}