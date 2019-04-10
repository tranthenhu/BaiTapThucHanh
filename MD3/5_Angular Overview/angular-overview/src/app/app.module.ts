import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { CaculatorComponent } from './caculator/caculator.component';
import { PetComponent } from './pet/pet.component';
import { FontSizeEditorComponent } from './font-size-editor/font-size-editor.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    CaculatorComponent,
    PetComponent,
    FontSizeEditorComponent,
    ColorPickerComponent,
   
  
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
