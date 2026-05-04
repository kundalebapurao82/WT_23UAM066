import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students = [
    { id: 1, name: 'Rahul', age: 20, course: 'CSE' },
    { id: 2, name: 'Priya', age: 21, course: 'IT' }
  ];

  getStudents() {
    return this.students;
  }

  addStudent(student: any) {
    this.students.push(student);
  }
}