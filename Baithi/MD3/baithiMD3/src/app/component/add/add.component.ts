import { Component, OnInit } from '@angular/core';
import { Awesome } from './../../module/awesome'
import { AwesomeService } from './../../service/awesome.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit {

  public awesomeForm: FormGroup;
  public subscription: Subscription;
  public awesome: Awesome[] = [];

  constructor(
    public awesomeService: AwesomeService,
    public routerService: Router,
    public formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.awesomeForm = this.formBuilder.group({
      tag: ['', [Validators.required, Validators.minLength(2)]],
      url: ['', [Validators.required, Validators.maxLength(50)]],
      descriptions: ['', [Validators.required, Validators.maxLength(50)]]
    });
  }

  onAddAwesome() {
    this.subscription = this.awesomeService.addAwesome(this.awesomeForm.value).subscribe(data =>
      this.awesome.push(data));
    this.routerService.navigate(['']);
  }

}
