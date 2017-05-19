import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MyClassMatesComponent } from './my-class-mates/my-class-mates.component';
import { ClassMatesComponent } from './class-mates/class-mates.component';
import { ClassMateComponent } from './class-mate/class-mate.component';

@NgModule({
  declarations: [
    AppComponent,
    MyClassMatesComponent,
    ClassMatesComponent,
    ClassMateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
