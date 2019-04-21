import { Component } from '@angular/core';

import { NgForm }   from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _http: HttpClient){}
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
title = 'Laravel Angular 4 App';
onSubmit(form: NgForm){
  return this._http.post('http://127.0.0.1:8000/api/items', JSON.stringify(form.value), {headers: this.headers})
   .toPromise() 
}

}
