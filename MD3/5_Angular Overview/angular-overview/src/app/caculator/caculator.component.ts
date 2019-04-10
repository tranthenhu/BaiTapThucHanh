import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caculator',
  templateUrl: './caculator.component.html',
  styleUrls: ['./caculator.component.scss']
})
export class CaculatorComponent implements OnInit {
  output: number;
  first: number;
  second: number;
  operator = '+';

  ngOnInit() {
  }
 
  calculate() {
    switch (this.operator) {
    case '+': this.output = this.first + this.second;
    break;
    case '-': this.output = this.first - this.second;
    break;
    case '*': this.output = this.first * this.second;
    break;
    case '/': this.output = this.first / this.second;
    break;
    }
    }
}
