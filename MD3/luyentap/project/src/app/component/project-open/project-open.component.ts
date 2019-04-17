import { Component, OnInit } from '@angular/core';
import { Project } from './../../model/project.model'
import { ProjectService } from './../../service/project.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-project-open',
  templateUrl: './project-open.component.html',
  styleUrls: ['./project-open.component.css']
})
export class ProjectOpenComponent implements OnInit {
  today = new Date();
  jstoday = '';
  public subscription: Subscription;
  public project: Project[] = [];
  public index = -1;
  //this.project.push(data)

  constructor(
    public projectService: ProjectService,
    public routerService: Router
  ) {
    this.projectService.listen().subscribe(
      data => {
        if (this.project.length !== 0) {
          for (let item of this.project) {
            this.index += 1;
            if (data.id === item.id) {
              this.project.splice(this.index, 1, data);
              this.index = -1;
              break;
            } else if (this.index === (this.project.length - 1)) {
              this.project.push(data);
              this.index = -1;
              break
            }
          }
        } else {
          this.project.push(data);
        }
      });
    this.jstoday = formatDate(this.today, ' hh:mm:ss ( dd-MM-yyyy )', 'en-US', '+0700');
  }

  
  ngOnInit() {
    this.projectService.getAllProject().subscribe((data: Project[]) => {
      for (let item of data) {
        if (!item.status) {
          this.project.push(item);
        }
      }
    });
  }

  onDoneProject(item) {
    item.status = true;
    item.finishDate = this.jstoday;
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
