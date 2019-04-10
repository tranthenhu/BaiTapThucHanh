import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from './../model/course.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CourseService {

  public API: string = 'http://localhost:3000/courses';

  constructor(public http: HttpClient) { }

  // getAllCourses(): Observable<Course[]> {
  //   return this.http.get(this.API);
  // }

  addCourse(course: Course) {
    return this.http.post<Course>(this.API, course);
  }

  getAllCourses() {
    return this.http.get<Course[]>(this.API);
  }

  getCourse(id: number) {
    return this.http.get<Course>(`${this.API}/${id}`);
  }

  updateCourse(course: Course) {
    return this.http.put<Course>(`${this.API}/${course.id}`, course);
  }

  deleteCourse(id: number) {
    return this.http.delete<Course>(`${this.API}/${id}`);
  }
}

