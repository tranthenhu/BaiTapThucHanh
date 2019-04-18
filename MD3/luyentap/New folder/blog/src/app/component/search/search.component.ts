import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Blogs } from './../../model/blogs'
import { BlogService } from './../../service/blog.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public blogs: Blogs[] = [];
  public subscription: Subscription;
  public subscriptionParams: Subscription;
  public keyword: string;
  today = new Date();
  jstoday = '';

  constructor(
    public blogService: BlogService,
    public routerService: Router,
    public activatedRouteService: ActivatedRoute
  ) {  this.jstoday = formatDate(this.today, ' hh:mm:ss ( dd-MM-yyyy )', 'en-US', '+0700')}

  ngOnInit() {

    this.subscriptionParams = this.activatedRouteService.params.subscribe((data: Params) => {
      this.keyword = data['keyword'];
      this.blogService.getAllBlog().subscribe((blog: Blogs[]) => {
        this.blogs = blog.filter(item => item.title.indexOf(this.keyword) > -1); 
      });
    })

  }

  onDoneBlog(item) {
    item.status = true;
    item.day = this.jstoday;
    this.blogService.updateBlog(item).subscribe((data: Blogs) => {
      this.blogs = this.blogs.filter(t => t.id !== data.id)
    })
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
