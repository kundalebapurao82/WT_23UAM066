import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-student',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-student.html',
  styleUrls: ['./view-student.css']
})
export class ViewStudent implements OnInit {

  students: any[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.students = this.studentService.getStudents();
  }
}