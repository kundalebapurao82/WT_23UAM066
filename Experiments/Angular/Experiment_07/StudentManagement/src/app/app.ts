import { Component } from '@angular/core';
import { AddStudentComponent } from '../add-student/add-student';
import { ViewStudentComponent } from '../view-student/view-student';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AddStudentComponent, ViewStudentComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  currentPage: string = 'home';

  navigate(page: string) {
    this.currentPage = page;
  }
}