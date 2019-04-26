import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ConGiap } from './../../model/con-giap'
import { ConGiapService } from './../../service/con-giap.service';
import {  ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detail-con-giap',
  templateUrl: './detail-con-giap.component.html',
  styleUrls: ['./detail-con-giap.component.css']
})
export class DetailConGiapComponent implements OnInit {
  public congiap: ConGiap;
  public subscription: Subscription;
  public subscriptionParams: Subscription;
  constructor(
    public congiapService: ConGiapService,
    public activatedRouteService: ActivatedRoute
  ) { }

  ngOnInit() {
    this.congiap = new ConGiap();
    this.subscriptionParams = this.activatedRouteService.params.subscribe((data: Params) => {
      let id = data['id'];
      this.subscription = this.congiapService.getDataOfID(id).subscribe((data: ConGiap) => {
        this.congiap = data;
      })
    });
  }

}
