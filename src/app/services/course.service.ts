import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CourseService {
  private _URL = 'Data/courses.json'
  private _http = inject(HttpClient)

  private visibleCount = new BehaviorSubject<number>(3); // Initial count is 3
  private courses: any[] = []; // Store fetched courses
  constructor() { }
  // getCourseNames(): Observable<any>{
  //    return this._http.get<any>(`${this._URL}`)
  // }
  // Fetch course names from the API only once
  getCourseNames(): Observable<any[]> {
    // If courses are already fetched, return them from the local cache
    if (this.courses.length > 0) {
      return of(this.courses);
    }

    // If courses are not fetched yet, fetch them from the API
    return this._http.get<any[]>(this._URL).pipe(
      map((data) => {
        this.courses = data; // Store fetched data
        return this.courses;
      }),
      catchError(() => {return of([]);})
    );
  }
  // Get the courses based on the visible count
  getCoursesWithCount(): Observable<any[]> {
    return this.getCourseNames().pipe(
      map((courses) => {
        return courses.slice(0, this.visibleCount.value); // Slice based on the visible count
      })
    );
}

// Update the number of visible courses
updateVisibleCount(count: number) {
  this.visibleCount.next(count);
}
}
