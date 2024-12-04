import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CourseService {
  private _URL = 'Data/courses.json'
  private _http = inject(HttpClient)
  constructor() { }
  getCourseNames(): Observable<any>{
    return this._http.get<any>(`${this._URL}`)
  }
}
