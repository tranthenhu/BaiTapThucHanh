import { Component, OnInit } from '@angular/core';
import { Awesome } from './../../module/awesome'
import { AwesomeService } from './../../service/awesome.service';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {

  public awesome: Awesome;
  public subscription: Subscription;
  public subscriptionParams: Subscription;

  constructor(
    public awesomeService: AwesomeService,
    public routerService: Router,
    public activatedRouteService: ActivatedRoute
  ) { }

  ngOnInit() {
    this.awesome = new Awesome();
    this.loadData();
  }

  loadData() {
    this.subscriptionParams = this.activatedRouteService.params.subscribe((data: Params) => {
      let id = data['id'];
      this.subscription = this.awesomeService.getAwesome(id).subscribe((awesome: Awesome) => {
        this.awesome = awesome;
      })
    });
  }

  onEditAwesome() {
    this.subscriptionParams = this.awesomeService.updateAwesome(this.awesome).subscribe((data: Awesome) => {
      this.routerService.navigate(['']);
    });

  }

  onDeleteAwesome(id: number) {
    this.awesomeService.deleteAwesome(id).subscribe((data: Awesome) => {
      this.routerService.navigate(['']);
    });
  }



}
