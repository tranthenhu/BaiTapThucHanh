import { Component, OnInit } from '@angular/core';
import { Awesome } from './../../module/awesome'
import { AwesomeService } from './../../service/awesome.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  public awesome: Awesome[] = [];

  constructor(
    public awesomeService: AwesomeService,
  ) { }

  ngOnInit() {
    this.awesomeService.getAllAwesome().subscribe((data: Awesome[]) => {
      this.awesome = data;
    });
  }

  onDeleteAwesome(id: number) {
    this.awesomeService.deleteAwesome(id).subscribe((data: Awesome) => {
      this.awesome = this.awesome.filter(t => t.id !== id)
    });
  }
}
