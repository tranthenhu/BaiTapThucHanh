import {  Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
interface IRatingUnit {
  value: number;
  active: boolean;
}
@Component({
  selector: 'app-ratingbar',
  templateUrl: './ratingbar.component.html',
  styleUrls: ['./ratingbar.component.css']
})
export class RatingbarComponent implements OnInit,OnChanges {
  public max = 5;
  public ratingValue = 5;
  public showRatingValue = true;
  public  rateChange = new EventEmitter<number>();
  public ratingUnits: Array<IRatingUnit> = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if ('max' in changes) {
      let max = changes.max.currentValue;
      max = typeof max === 'undefined' ? 5 : max;
      this.max = max;
      this.calculate(max, this.ratingValue);
    }
  }

  calculate(max, ratingValue) {
    this.ratingUnits = Array.from({length: max},
      (_, index) => ({
        value: index + 1,
        active: index < ratingValue
      }));
  }

  ngOnInit() {
    this.calculate(this.max, this.ratingValue);
  }

  select(index) {
    this.ratingValue = index + 1;
    this.ratingUnits.forEach((item, idx) => item.active = idx < this.ratingValue);
    this.rateChange.emit(this.ratingValue);
  }
  enter(index) {
    this.ratingUnits.forEach((item, idx) => item.active = idx <= index);
  }
  reset() {
    this.ratingUnits.forEach((item, idx) => item.active = idx < this.ratingValue);
  }

}
