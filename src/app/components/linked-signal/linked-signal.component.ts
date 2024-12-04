import { Component, effect, inject, linkedSignal, signal } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-linked-signal',
  imports: [CommonModule, MatButtonModule],
  templateUrl: './linked-signal.component.html',
  styleUrl: './linked-signal.component.css'
})
export class LinkedSignalComponent {
 // Signal to store the course names
 readonly courseNames = signal<any[]>([]);

 // Signal to store the current visible count
 readonly currentCount = signal<number>(3);

 // Inject CourseService
 private _courseService = inject(CourseService);

 // LinkedSignal to reactively get the courses based on currentCount
 readonly linkedCourses = linkedSignal(this.currentCount, {
   equal: (prev: number, next: number) => prev === next, // Value equality check
 });

 constructor() {
   // Effect to listen for changes in linkedCourses signal and fetch courses accordingly
   effect(() => {
     const count = this.linkedCourses();  // Get the count value from the linked signal

     // Call the service to get courses based on the count
     this._courseService.getCoursesWithCountForSignal(count).forEach((courses) => {
       // Update the courseNames signal with the new courses
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
