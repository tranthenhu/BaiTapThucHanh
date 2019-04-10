import { Component, OnInit } from '@angular/core';
import { Project } from './../../model/project.model'
import { ProjectService } from './../../service/project.service';
import { Subscription } from 'rxjs';
import { Router} from '@angular/router';

@Component({
  selector: 'app-project-done',
  templateUrl: './project-done.component.html',
  styleUrls: ['./project-done.component.css']
})
export class ProjectDoneComponent implements OnInit {

  public subscription: Subscription;
  public project: Project[] = [];
  public today = Date.now();

  constructor(
    public projectService: ProjectService,
    public routerService: Router
  ) { }

  ngOnInit() {
    this.projectService.getAllProject().subscribe((data: Project[]) => {
      for (let item of data) {
        if (item.status) {
          this.project.push(item);
        }
      }
    });
  }

  onRestatProject(item) {
    item.status = false;
    item.finishDate = null;
    this.projectService.updateProject(item).subscribe((data: Project) => {
      this.project = this.project.filter(t => t.id !== data.id)
    })
  }
  onDeleteProject(id: number) {
    this.projectService.deleteProject(id).subscribe((data: Project) => {
      this.project = this.project.filter(t => t.id !== id)
    });
  }
}
