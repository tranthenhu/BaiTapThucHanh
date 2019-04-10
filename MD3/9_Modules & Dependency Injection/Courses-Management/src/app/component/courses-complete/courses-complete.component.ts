import { Component, OnInit } from '@angular/core';
import { CourseService } from './../../service/course.service';
import { Subscription } from 'rxjs';
import { Course } from './../../model/course.model';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-courses-complete',
  templateUrl: './courses-complete.component.html',
  styleUrls: ['./courses-complete.component.css']
})
export class CoursesCompleteComponent implements OnInit {

  public courses: Course[] = [];
  public subscription: Subscription;

  constructor(
    public courseService: CourseService,
    public routerService: Router
  ) { }

  ngOnInit() {
    this.courseService.getAllCourses().subscribe((data: Course[]) => {
      for (let item of data) {
        if (item.status) {
          this.courses.push(item);
        }
      }
    });
  }

  onRestartCourse(item) {
   
      item.status =  false;
      this.courseService.updateCourse(item).subscribe((data: Course) => {
        this.courses = this.courses.filter(t => t.id !== data.id)
      });
   
  }

  
  



}
