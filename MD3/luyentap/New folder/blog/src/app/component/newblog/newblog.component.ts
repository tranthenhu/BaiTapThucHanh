import { Component, OnInit } from '@angular/core';
import { Blogs } from './../../model/blogs'
import { BlogService } from './../../service/blog.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-newblog',
  templateUrl: './newblog.component.html',
  styleUrls: ['./newblog.component.css']
})
export class NewblogComponent implements OnInit {

  today = new Date();
  jstoday = '';
  public blogForm: FormGroup;
  public subscription: Subscription;
  public blogs: Blogs[] = [];

  constructor(
    public blogService : BlogService,
    public routerService: Router,
    public formBuilder: FormBuilder
  ) {  this.jstoday = formatDate(this.today, ' hh:mm:ss ( dd-MM-yyyy )', 'en-US', '+0700')}

  ngOnInit() {
    this.blogService.getAllBlog().subscribe((data: Blogs[]) => {
      for (let item of data) {
        if (!item.status) {
          this.blogs.push(item);
        }
      }
    });
    this.blogForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(2)]],
      content: ['', [Validators.required, Validators.maxLength(20)]],
      day: [null],
      status: [false]
    });
  }

  onAddBlog() {
    this.subscription = this.blogService.addBlog(this.blogForm.value).subscribe(data =>
     this.blogs.push(data));  
     this.blogForm.reset();
    
  }

  onDoneBlog(item) {
    item.status = true;
    item.day = this.jstoday;
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
