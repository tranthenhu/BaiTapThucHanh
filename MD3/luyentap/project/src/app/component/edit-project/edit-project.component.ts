import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProjectService } from './../../service/project.service';
import { Subscription } from 'rxjs';
import { Project } from './../../model/project.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit, OnDestroy {

  public project: Project;
  public subscription: Subscription;
  public subscriptionParams: Subscription;


  constructor
    (
      public projectService: ProjectService,
      public routerService: Router,
      public activatedRouteService: ActivatedRoute
    ) { }

  ngOnInit() {
    this.project = new Project();
    this.loadData();

  }

  loadData() {
    this.subscriptionParams = this.activatedRouteService.params.subscribe((data: Params) => {
      let id = data['id'];
      this.subscription = this.projectService.getProject(id).subscribe((project: Project) => {
        this.project = project;

      })
    });
  }

  onEditProject() {
    this.subscriptionParams = this.projectService.updateProject(this.project).subscribe((data: Project) => {
      this.routerService.navigate(['projectOpen']);
    });
  }


  ngOnDestroy() {

  }

}


