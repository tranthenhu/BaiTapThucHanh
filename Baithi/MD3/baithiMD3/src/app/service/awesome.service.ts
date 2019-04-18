import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Awesome } from './../module/awesome';


@Injectable({
  providedIn: 'root'
})
export class AwesomeService {

  public API: string = 'http://localhost:3000/awesomes';

  constructor(public http: HttpClient) { }

  addAwesome(awesome: Awesome) {
    return this.http.post<Awesome>(this.API, awesome);
  }

  getAllAwesome() {
    return this.http.get<Awesome[]>(this.API);
  }

  getAwesome(id: number) {
    return this.http.get<Awesome>(`${this.API}/${id}`);
  }

  updateAwesome(awesome: Awesome) {
    return this.http.put<Awesome>(`${this.API}/${awesome.id}`, awesome);
  }

  deleteAwesome(id: number) {
    return this.http.delete<Awesome>(`${this.API}/${id}`);
  }

}
