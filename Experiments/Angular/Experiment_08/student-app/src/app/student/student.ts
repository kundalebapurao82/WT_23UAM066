import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student.html',
  styleUrls: ['./student.css']
})
export class Student {

  students = [
    { id: 1, name: 'Rahul', age: 20, course: 'CSE' },
    { id: 2, name: 'Priya', age: 21, course: 'IT' }
  ];

  newStudent = {
    id: 0,
    name: '',
    age: 0,
    course: ''
  };

  addStudent() {
    this.students.push({ ...this.newStudent });
    this.newStudent = { id: 0, name: '', age: 0, course: '' };
  }
}