import { Component } from '@angular/core';
import {todos} from "./shara/tasks"
import {variables} from "./shara/todo";


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'Моя остання надія';

//todos: variables[] = todos;
//
//  create(title: string){
//
//const todo = new variables(title);
//     this.todos.push(todo)
//  }

}
