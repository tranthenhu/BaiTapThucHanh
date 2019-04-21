import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { NewblogComponent } from './component/newblog/newblog.component';
import { BlogdoneComponent } from './component/blogdone/blogdone.component';
import { EditblogComponent } from './component/editblog/editblog.component';
import { SearchComponent } from './component/search/search.component';
import { UpdateAfterDoneComponent } from './component/update-after-done/update-after-done.component';

const router: Routes = [
  
  
      { path: 'lish', component: NewblogComponent },
      { path: 'blogdone', component: BlogdoneComponent,
      children : [
        { path : 'updateAfterDone/:id' , component : UpdateAfterDoneComponent}
      ]
     },
      { path: 'edit/:id', component: EditblogComponent },
      { path: 'search/:keyword', component: SearchComponent },
    
      { path: '**', component: NewblogComponent }


]

@NgModule({
  declarations: [
    AppComponent,
    NewblogComponent,
    BlogdoneComponent,
    EditblogComponent,
    SearchComponent,
    UpdateAfterDoneComponent
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
