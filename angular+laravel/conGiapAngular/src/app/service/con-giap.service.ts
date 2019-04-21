
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConGiap } from './../model/con-giap';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConGiapService {

  public API: string = 'http://localhost:8000/api';

  constructor(public http: HttpClient) { }



  getAll() {
    return this.http.get<ConGiap[]>(this.API);
  }

  getDataOfID(id) {
    return this.http.get<ConGiap>(`${this.API}/detail/${id}`);
  }

}
