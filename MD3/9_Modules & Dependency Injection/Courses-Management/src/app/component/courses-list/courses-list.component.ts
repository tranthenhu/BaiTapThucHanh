import { Component, OnInit, OnDestroy } from '@angular/core';
import { CourseService } from './../../service/course.service';
import { Subscription } from 'rxjs';
import { Course } from './../../model/course.model';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})

export class CoursesListComponent implements OnInit, OnDestroy {
  public subscription: Subscription;
  public courses: Course[] = [];

  constructor(
    public courseService: CourseService,
    public routerService: Router
  ) { }

  ngOnInit() {
    this.courseService.getAllCourses().subscribe((data: Course[]) => {
      for (let item of data) {
        if (!item.status) {
          this.courses.push(item);
        }
      }
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onDoneCourse(item) {
    item.status = true;
    this.courseService.updateCourse(item).subscribe((data: Course) => {
      this.courses = this.courses.filter(t => t.id !== data.id)
    })
  }

  onDeleteCourse(id: number) {
    this.courseService.deleteCourse(id).subscribe((data: Course) => {
      this.courses = this.courses.filter(t => t.id !== id)
    });
  }
}
