import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { ListComponent } from './list/list.component';
import { TaskComponent } from './task/task.component';
import {TodoService} from "./services/service";

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ListComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
