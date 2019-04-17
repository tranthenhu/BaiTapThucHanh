import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Blogs } from './../model/blogs';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  public API: string = 'http://localhost:3000/Blogs';

  constructor(public http: HttpClient) { }

  addBlog(blog: Blogs) {
    return this.http.post<Blogs>(this.API, blog);
  }

  getAllBlog() {
    return this.http.get<Blogs[]>(this.API);
  }

  getBlog(id: number) {
    return this.http.get<Blogs>(`${this.API}/${id}`);
  }

  updateBlog(blog: Blogs) {
    return this.http.put<Blogs>(`${this.API}/${blog.id}`, blog);
  }

  deleteBlog(id: number) {
    return this.http.delete<Blogs>(`${this.API}/${id}`);
  }

}
