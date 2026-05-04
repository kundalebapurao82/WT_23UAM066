import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';   // ✅ Import this
import { StudentService } from '../Services/student-service';

@Component({
  selector: 'app-view-student',
  standalone: true,                // ✅ Make sure it's standalone
  imports: [CommonModule],         // ✅ Add this
  templateUrl: './view-student.html',
  styleUrl: './view-student.css',
})
export class ViewStudent {
  students: any[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.students = this.studentService.getStudents();
    console.log(this.students);
  }
}