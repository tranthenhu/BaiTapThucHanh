import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { Routes ,RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NamecardComponent } from './namecard/namecard.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { CountdowntimerComponent } from './countdowntimer/countdowntimer.component';
import { CountdowntimeraliasComponent } from './countdowntimeralias/countdowntimeralias.component';
import { RatingbarComponent } from './ratingbar/ratingbar.component';
import { TodoComponent } from './todo/todo.component';
import { TimelinesComponent } from './timelines/timelines.component';
import { YoutubePlaylistComponent } from './youtube-playlist/youtube-playlist.component';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { DictionaryDetailComponent } from './dictionary-detail/dictionary-detail.component';
import { DictionaryPageComponent } from './dictionary-page/dictionary-page.component';


const appRouter :Routes = [
  { path : 'namecard' , component:NamecardComponent  },
  { path : 'ProgressBarComponent' , component:ProgressBarComponent  },
  { path : 'CountdowntimerComponent' , component:CountdowntimerComponent  },
  { path : 'CountdowntimeraliasComponent' , component:CountdowntimeraliasComponent  },
  { path : 'RatingbarComponent' , component:RatingbarComponent  },
  { path : 'TimelinesComponent' , component:TimelinesComponent  },
  { path : 'TodoComponent' , component:TodoComponent  },
  {
    path: 'youtube',
    component: YoutubePlaylistComponent,
    children: [{
        path: ':id',
        component: YoutubePlayerComponent
    }]
},  {
  path: 'dictionary',
  component: DictionaryPageComponent,
  children: [
    {
      path: ':key',
      component: DictionaryDetailComponent
    }
  ]
},
]

@NgModule({
  declarations: [
    AppComponent,
    NamecardComponent,
    ProgressBarComponent,
    CountdowntimerComponent,
    CountdowntimeraliasComponent,
    RatingbarComponent,
    TodoComponent,
    TimelinesComponent,
    YoutubePlaylistComponent,
    YoutubePlayerComponent,
    DictionaryComponent,
    DictionaryDetailComponent,
    DictionaryPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouter) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
