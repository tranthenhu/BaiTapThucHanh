import { Component, OnInit } from '@angular/core';
import { Blogs } from './../../model/blogs'
import { BlogService } from './../../service/blog.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blogdone',
  templateUrl: './blogdone.component.html',
  styleUrls: ['./blogdone.component.css']
})
export class BlogdoneComponent implements OnInit {
  public subscription: Subscription;
  public blogs: Blogs[] = [];
  constructor(
    public blogService : BlogService,
    public routerService: Router,
  ) { }

  ngOnInit() {
    this.blogService.getAllBlog().subscribe((data: Blogs[]) => {
      for (let item of data) {
        if (item.status) {
          this.blogs.push(item);
        }
      }
    });
  }

  restartBlog(item) {
    item.status = false;
    item.day = null;
    this.blogService.updateBlog(item).subscribe((data: Blogs) => {
      this.blogs = this.blogs.filter(t => t.id !== data.id)
    })
  }

  onDeleteBlog(id: number) {
    this.blogService.deleteBlog(id).subscribe((data: Blogs) => {
      this.blogs = this.blogs.filter(t => t.id !== id)
    });
  }

}
