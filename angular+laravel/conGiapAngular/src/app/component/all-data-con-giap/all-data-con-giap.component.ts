import { Component, OnInit } from '@angular/core';
import { ConGiap } from './../../model/con-giap'
import { ConGiapService } from './../../service/con-giap.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-data-con-giap',
  templateUrl: './all-data-con-giap.component.html',
  styleUrls: ['./all-data-con-giap.component.css']
})
export class AllDataConGiapComponent implements OnInit {
  public subscription: Subscription;
  public congiaps: ConGiap[] = [];

  constructor(
    public congiapService: ConGiapService,
  ) { }

  ngOnInit() {
    this.congiapService.getAll().subscribe((data: ConGiap[]) => {
      this.congiaps = data;
    });
  }


}
