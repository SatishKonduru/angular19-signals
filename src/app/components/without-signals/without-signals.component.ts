import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { Observable } from 'rxjs';
import {  CourseService } from '../../services/course.service';

@Component({
  selector: 'app-without-signals',
  imports: [CommonModule,MatToolbarModule, MatButtonModule],
  templateUrl: './without-signals.component.html',
  styleUrl: './without-signals.component.css'
})
export class WithoutSignalsComponent implements OnInit{
  // courseNames : any[] = []
  courseNames$ : Observable<any>
  private _courseService = inject(CourseService)
  private _changeDetector = inject(ChangeDetectorRef)
  currentCount = 3;
  ngOnInit(): void {
    this.getCourses()
  }

  getCourses(){
    //  this._courseService.getCourseNames().subscribe({
    //   next:  (res: any) =>{
    //     this.courseNames = res
    //      this._changeDetector.detectChanges()
    //   }
    // })
     this.courseNames$ = this._courseService.getCoursesWithCount()
  }

  addCourse(){
    this.currentCount++;
    this._courseService.updateVisibleCount(this.currentCount);
    this.getCourses(); // Reload the courses with the new count
  }
  removeCourse(){
    this.currentCount--;
    this._courseService.updateVisibleCount(this.currentCount);
    this.getCourses();
  }

}
