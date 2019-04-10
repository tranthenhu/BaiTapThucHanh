import { Component, OnInit ,OnDestroy} from '@angular/core';

@Component({
  selector: 'app-countdowntimer',
  templateUrl: './countdowntimer.component.html',
  styleUrls: ['./countdowntimer.component.css']
})
export class CountdowntimerComponent implements OnInit ,OnDestroy{
  public intervalId = 0;
  public message = '';
  public remainingTime: number;
  public seconds = 11;

  clearTimer() {
    clearInterval(this.intervalId);
  }

  ngOnInit() {
    this.reset();
    this.start();
  }
  ngOnDestroy() {
    this.clearTimer();
  }

  start() {
    this.countDown();
    if (this.remainingTime <= 0) {
      this.remainingTime = this.seconds;
    }
  }
  stop() {
    this.clearTimer();
    this.message = `Holding at T-${this.remainingTime} seconds`;
  }
  reset() {
    this.clearTimer();
    this.remainingTime = this.seconds;
    this.message = `Click start button to start the Countdown`;
  }

  private countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.remainingTime -= 1;
      if (this.remainingTime === 0) {
        this.message = 'Blast off!';
        this.clearTimer();
      } else {
        this.message = `T-${this.remainingTime} seconds and counting`;
      }
    }, 1000);
  }
}
