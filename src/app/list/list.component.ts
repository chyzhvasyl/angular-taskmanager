import { Component, OnInit } from '@angular/core';
import {variables} from "../shara/todo"

import {TodoService} from '../services/service'
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  todos:variables[];

  delete(todo: variables)
  {
this.TodoService.deleTodo(todo);
  }
  constructor(private TodoService: TodoService) { this.todos =[]}

  ngOnInit() {

    this.todos = this.TodoService.getTodos();
  }
  selector ( todo: variables){
     this.TodoService.selectortodo(todo);

  }
}
