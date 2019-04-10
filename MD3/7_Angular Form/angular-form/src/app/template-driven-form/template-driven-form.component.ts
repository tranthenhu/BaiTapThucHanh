import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {

  constructor() { }

  profile = {
    username: 'Bob',
    email: 'abc@deg.com',
    facebook: 'facebook.com',
    twiter: 'twitter.com',
    website: 'example.com',
    tel: '1234-5678-90'
  };

  ngOnInit() {
  }
  onSubmit(profileForm) {
    console.log(profileForm);
    
  }
}

