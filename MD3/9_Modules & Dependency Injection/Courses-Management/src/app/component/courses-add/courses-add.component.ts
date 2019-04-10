import { Component, OnInit, OnDestroy } from '@angular/core';
import { CourseService } from './../../service/course.service';
import { Subscription } from 'rxjs';
import { Course } from './../../model/course.model';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-courses-add',
  templateUrl: './courses-add.component.html',
  styleUrls: ['./courses-add.component.css']
})

export class CoursesAddComponent implements OnInit, OnDestroy {

  public subscription: Subscription;
  public courseForm: FormGroup;

  constructor(
    public courseService: CourseService,
    public routerService: Router,
    public formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.courseForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      description: ['', [Validators.required, Validators.maxLength(20)]],
      fee: ['', [Validators.min(0)]],
      status: [false]
    })
  }

  onAddCourse() {
    this.subscription = this.courseService.addCourse(this.courseForm.value).subscribe(data => {
      if (data && data.id) {
        this.routerService.navigate(['courses']);
      }
    });
  }

  ngOnDestroy() {

  }

}
