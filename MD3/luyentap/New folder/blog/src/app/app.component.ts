import { Component, OnInit } from '@angular/core';
import { Blogs } from './../app/model/blogs'
import { BlogService } from './../app/service/blog.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public keywords: string;

  constructor(
    public blogService: BlogService,
    public routerService: Router,

  ) { }

  onChange(key) {
    this.keywords = key;
    this.routerService.navigate(['/search', this.keywords]);
  }

}
