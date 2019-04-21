import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AllDataConGiapComponent } from './component/all-data-con-giap/all-data-con-giap.component';
import { DetailConGiapComponent } from './component/detail-con-giap/detail-con-giap.component';

const router: Routes = [
  {
    path: '', component: AllDataConGiapComponent,
  },
  {
    path: 'detail/:id', component: DetailConGiapComponent,
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AllDataConGiapComponent,
    DetailConGiapComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(router)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
