import { Component, effect, inject, OnInit, signal } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-with-signals',
  imports: [],
  templateUrl: './with-signals.component.html',
  styleUrl: './with-signals.component.css'
})
export class WithSignalsComponent{
  readonly courseNames = signal<string[]>([]);
  private _courseService = inject(CourseService);

  constructor(){
    effect(() => {
      this._courseService.getCourseNames().forEach((data: string[]) => {
      this.courseNames.update(currentValue => [...currentValue, ...data]);
      });
    });
  }

}
