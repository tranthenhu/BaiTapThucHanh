import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { HomeComponent } from './component/home/home.component';
import { CoursesComponent } from './component/courses/courses.component';
import { CoursesListComponent } from './component/courses-list/courses-list.component';
import { CoursesAddComponent } from './component/courses-add/courses-add.component';
import { CoursesEditComponent } from './component/courses-edit/courses-edit.component';
import { CourseService } from './service/course.service';
import { CoursesCompleteComponent } from './component/courses-complete/courses-complete.component';

const appRoutes: Routes = [

  {
    path: '', component: HomeComponent
  },
  {
    path: 'courses', component: CoursesComponent,
    children : [
      {
        path : '' , component : CoursesListComponent
      },
      {
        path : ':id/edit', component : CoursesEditComponent
      },
      {
        path : 'add', component : CoursesAddComponent
      }
    ]
  },
  {
    path: '**', component :CoursesCompleteComponent,
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoursesComponent,
    CoursesListComponent,
    CoursesAddComponent,
    CoursesEditComponent,
    CoursesCompleteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes) 
  ],
  providers: [
    CourseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
