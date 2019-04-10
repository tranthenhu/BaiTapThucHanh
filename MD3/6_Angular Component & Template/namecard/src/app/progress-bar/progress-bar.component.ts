import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  public backgroundColor = '#d9d9d9';
  public progressColor = '#4CAF50';
  public width = 50;
  constructor() { }

  ngOnInit() {
  }

}
