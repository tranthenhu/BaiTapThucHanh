import { Component, OnInit, OnDestroy,Output,EventEmitter,NgZone } from '@angular/core';
import { Subscription } from 'rxjs';
import { Blogs } from './../../model/blogs'
import { BlogService } from './../../service/blog.service';
import { ShareService } from './../../service/share.service';

import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-update-after-done',
  templateUrl: './update-after-done.component.html',
  styleUrls: ['./update-after-done.component.css']
})
export class UpdateAfterDoneComponent implements OnInit {
 
  @Output() updateAfterDone: EventEmitter<any> = new EventEmitter();

  public blogs: Blogs;
  public subscription: Subscription;
  public subscriptionParams: Subscription;
public ngZone:NgZone;
  constructor(
    public blogService: BlogService,
    public routerService: Router,
    public activatedRouteService: ActivatedRoute,
    private sharedService: ShareService
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
         this.routerService.navigate(['/blogdone'])
      });
   }


}
