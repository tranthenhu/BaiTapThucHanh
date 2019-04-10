
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from './../model/project.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  public API: string = 'http://localhost:3000/Project';

  constructor(public http: HttpClient) { }


  addProject(project: Project) {
    return this.http.post<Project>(this.API, project);
  }

  getAllProject() {
    return this.http.get<Project[]>(this.API);
  }

  getProject(id: number) {
    return this.http.get<Project>(`${this.API}/${id}`);
  }

  updateProject(project: Project) {
    return this.http.put<Project>(`${this.API}/${project.id}`, project);
  }

  deleteProject(id: number) {
    return this.http.delete<Project>(`${this.API}/${id}`);
  }
}



