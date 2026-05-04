import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-student',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-student.html',
  styleUrls: ['./view-student.css']
})
export class ViewStudent {

  @Input() students: any[] = [];
}