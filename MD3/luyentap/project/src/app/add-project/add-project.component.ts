
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProjectService } from './../service/project.service';
import { Subscription } from 'rxjs';
import { Project } from './../model/project.model';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit, OnDestroy {

  public subscription: Subscription;
  public projectForm: FormGroup;
  public project: Project[] = [];

  constructor(
    public projectService: ProjectService,
    public routerService: Router,
    public formBuilder: FormBuilder
  ) { }


  ngOnInit() {
    this.projectForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(2)]],
      content: ['', [Validators.required, Validators.maxLength(20)]],
      finishDate: [null],
      status: [false]
    })
  }

  onAddProject() {
    this.subscription = this.projectService
                        .addProject(this.projectForm.value)
                        .subscribe(
                          data => (
                            this.projectService.trans(data)
                          )  
    );
    this.routerService.navigate(['projectOpen']);
  }

  ngOnDestroy() {

  }
}
