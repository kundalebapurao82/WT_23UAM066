import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-student.html',
  styleUrls: ['./add-student.css']
})
export class AddStudent {

  @Output() studentAdded = new EventEmitter<any>();

  student = {
    id: 0,
    name: '',
    age: 0,
    course: ''
  };

  add() {
    this.studentAdded.emit({ ...this.student });
    this.student = { id: 0, name: '', age: 0, course: '' };
  }
}