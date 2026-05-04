import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../services/student';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-student.html',
  styleUrls: ['./add-student.css']
})
export class AddStudent {

  student = {
    id: 0,
    name: '',
    age: 0,
    course: ''
  };

  constructor(
    private studentService: StudentService,
    private router: Router
  ) {}

  add() {
    this.studentService.addStudent({ ...this.student });
    this.student = { id: 0, name: '', age: 0, course: '' };
    this.router.navigate(['/view']);
  }
}