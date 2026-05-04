import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  students = [
    { id: 1, name: 'Akshay', age: 20, course: 'AI'},
    { id: 2, name: 'Jatin', age: 20, course: 'AI'},
    { id: 3, name: 'Sourabh', age: 20, course: 'CS'},
    { id: 4, name: 'Prashant', age: 21, course: 'DS'}

  ]

  getStudents() {
    return this.students;
  }
}
