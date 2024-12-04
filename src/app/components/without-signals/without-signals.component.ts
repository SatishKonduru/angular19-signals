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
  styleUrl: './without-signals.component.css',

})
export class WithoutSignalsComponent implements OnInit{
  courseNames : any[] = []
  private _courseService = inject(CourseService)
  private _changeDetector = inject(ChangeDetectorRef)
  ngOnInit(): void {
    this.getCourses()
  }

  getCourses(){
    this._courseService.getCourseNames().subscribe({
      next: (res: any) =>{
        this.courseNames = res
        console.log("this.courseNames: ", this.courseNames)
      }
    })
  }


}
