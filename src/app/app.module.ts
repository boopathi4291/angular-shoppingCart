import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import {CourseComponent} from './course.component';
import { AppComponent } from './app.component';
import { ListofcoursesComponent } from './listofcourses/listofcourses.component';
import { DurationPipe } from './duration.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    ListofcoursesComponent,
    DurationPipe
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
