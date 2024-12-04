import { Component, computed, effect, inject, OnInit, signal } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-with-signals',
  imports: [CommonModule,MatButtonModule ],
  templateUrl: './with-signals.component.html',
  styleUrl: './with-signals.component.css'
})
export class WithSignalsComponent{
  readonly courseNames = signal<string[]>([]);
  // Signal to store the current visible count
  readonly currentCount = signal<number>(3);
  private _courseService = inject(CourseService);

  // constructor(){
  //   effect(() => {
  //     this._courseService.getCourseNames().forEach((data: string[]) => {
  //     this.courseNames.update(currentValue => [...currentValue, ...data]);
  //     });
  //   });
  // }
  constructor() {
    // Use effect to listen to any changes in the currentCount and update courses accordingly
    effect(() => {
      const count = this.currentCount()
      // Fetch courses based on the current visible count
      this._courseService.getCoursesWithCountForSignal(count).forEach((courses) => {
        // Update courseNames signal with the new courses
        this.courseNames.update(() => courses);

      });
    });
  }
  // Method to add a course by increasing the current count
  addCourse() {
    this.currentCount.update((count) => count + 1);

  }

  // Method to remove a course by decreasing the current count
  removeCourse() {
    this.currentCount.update((count) => count - 1);
  }

}
