import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ProjectOpenComponent } from './component/project-open/project-open.component';
import { ProjectDoneComponent } from './component/project-done/project-done.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { EditProjectComponent } from './component/edit-project/edit-project.component';

const projectRouter : Routes = [
  {path: '' , component:NavbarComponent,
  children: [
    { path: 'projectOpen', component: ProjectOpenComponent,
   children: [
     {path: 'add', component: AddProjectComponent},
     {path: ':id/edit', component: EditProjectComponent}
   ]
  },
    { path: 'projectDone', component: ProjectDoneComponent},

  ]},
  {
    path: '**', component :NavbarComponent,
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProjectOpenComponent,
    ProjectDoneComponent,
    AddProjectComponent,
    EditProjectComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(projectRouter)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
