import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  ngOnInit() {
  }
  name: string;
  tuoi: number;
  email: string;
  output: [string,number,string];

  showprofile() {
    return this.output = [this.name, this.tuoi, this.email];
  }
}
