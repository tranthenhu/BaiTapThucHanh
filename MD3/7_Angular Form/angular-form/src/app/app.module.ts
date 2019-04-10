import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { TimelinesComponent } from './timelines/timelines.component';

const routesConfig: Routes = [
  { path: 'RegisterComponent', component: RegisterComponent },
  { path: 'TemplateDrivenFormComponent', component: TemplateDrivenFormComponent },
  { path: '**', component: RegisterComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenFormComponent,
    RegisterComponent,
    DashboardComponent,
    TimelinesComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(routesConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
