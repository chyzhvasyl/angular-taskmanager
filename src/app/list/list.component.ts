import { Component, OnInit, Input } from '@angular/core';
import {variables} from "../shara/todo"
import {todos} from "../shara/tasks"
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
 todos: variables[] = todos;

  delete(todo: variables)
  {
    let id = this.todos.indexOf(todo);
    if(id> -1)
    {
      this.todos.splice(id, 1)

    }
  }
  constructor() { }

  ngOnInit() {
  }

}
