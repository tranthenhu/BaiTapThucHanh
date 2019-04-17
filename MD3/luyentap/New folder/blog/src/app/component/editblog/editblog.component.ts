import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Blogs } from './../../model/blogs'
import { BlogService } from './../../service/blog.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-editblog',
  templateUrl: './editblog.component.html',
  styleUrls: ['./editblog.component.css']
})
export class EditblogComponent implements OnInit {
  public blogs: Blogs;
  public subscription: Subscription;
  public subscriptionParams: Subscription;
  
  constructor(
    public blogService: BlogService,
    public routerService: Router,
    public activatedRouteService: ActivatedRoute
  ) { }

  ngOnInit() {
    this.blogs = new Blogs();
    this.loadData();
  }

  loadData() {
    this.subscriptionParams = this.activatedRouteService.params.subscribe((data: Params) => {
      let id = data['id'];
      this.subscription = this.blogService.getBlog(id).subscribe((blogs: Blogs) => {
        this.blogs = blogs;
      })
    });
  }

  onEditBlog() {
    this.subscriptionParams = this.blogService.updateBlog(this.blogs).subscribe((data: Blogs) => {  
      this.routerService.navigate(['']);
    });
    
  }
}
